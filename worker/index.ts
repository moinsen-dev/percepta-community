const categories = ['shopping', 'questions', 'interaction', 'orientation', 'other'];
const consentVersion = 'private-pilot-2026-10-21';
const retentionDays = 30; // Proposed pilot policy; intake stays closed until operating review.
const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'X-Robots-Tag': 'noindex', 'Referrer-Policy': 'no-referrer' };
const json = (value: object, status = 200) => Response.json(value, { status, headers });
// Public stories become GitHub issues in the project repository right after explicit consent (D-19).
const storyConsentVersion = 'public-story-2026-10-21';
const storyRepo = 'moinsen-dev/percepta-community';
const storyLabel = 'geschichte';
const storiesPerDay = 30;
const storyStart = '<!-- percepta-story -->';
const storyEnd = '<!-- /percepta-story -->';
const categoryNames: Record<string, [string, string]> = {
  shopping: ['Einkaufen', 'Shopping'], questions: ['Fragen und Informationen', 'Questions and information'],
  interaction: ['Mit Menschen sprechen', 'Interacting with people'], orientation: ['Sich orientieren', 'Finding your way'], other: ['Anderes oder noch offen', 'Something else or not sure yet'],
};
type StoryEnv = Env & { GITHUB_TOKEN?: string; ADMIN_TOKEN?: string };
const storiesOpen = (env: StoryEnv) => env.STORIES_OPEN === 'true' && Boolean(env.GITHUB_TOKEN);
const github = (env: StoryEnv, path: string, init: RequestInit = {}) => fetch(`${env.GITHUB_API_URL}${path}`, {
  ...init,
  headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${env.GITHUB_TOKEN}`, 'User-Agent': 'percepta-community', 'X-GitHub-Api-Version': '2022-11-28', ...init.headers },
});
// Contact details and links make a story identifiable or spammy; such texts are refused, not cleaned.
const identifierPatterns = [/[^\s@]+@[^\s@]+\.[a-z]{2,}/i, /(?:\+|\b0)\d[\d\s/()-]{6,}\d/, /https?:\/\/|www\./i];
const escapeHtml = (text: string) => text.replace(/[&<>"']/g, char => `&#${char.charCodeAt(0)};`);

function storyTitle(story: string, lang: string) {
  const given = story.match(/^\s*(?:Titel|Title)\s*:?\s*(.+)$/im)?.[1];
  // Without a title line, use the first sentence of at least 20 characters and cut long text at a word boundary.
  const text = (given ?? story.split('\n').find(part => part.trim()) ?? '').replace(/[#*_`]/g, '').trim();
  const line = given ? text : text.match(/^.{20,}?[.!?](?=\s|$)/)?.[0] ?? text;
  const title = line.length <= 80 ? line : `${line.slice(0, 80).replace(/\s+\S*$/, '')} …`;
  return `${lang === 'de' ? 'Geschichte' : 'Story'}: ${title || (lang === 'de' ? 'Ohne Titel' : 'Untitled')}`;
}

function storyBody(story: string, lang: string, category: string) {
  // A zero-width space after @ prevents accidental GitHub mentions.
  const text = story.replace(/@/g, '@\u200b');
  const footer = lang === 'de'
    ? `Bereich laut Formular: ${categoryNames[category][0]}. Ohne Namen über percepta.moinsen.dev eingereicht; die Person hat der Veröffentlichung dieses Textes ausdrücklich zugestimmt (${storyConsentVersion}). Entfernen auf Anfrage an business@moinsen.dev.`
    : `Area from the form: ${categoryNames[category][1]}. Submitted without a name via percepta.moinsen.dev; the person explicitly agreed to publishing this text (${storyConsentVersion}). Removal on request to business@moinsen.dev.`;
  return `${storyStart}\n${text}\n${storyEnd}\n\n---\n${footer}\n`;
}

async function createStory(request: Request, env: StoryEnv) {
  if (!storiesOpen(env)) return json({ error: 'stories_closed' }, 503);
  const limited = await env.INTAKE_LIMIT.limit({ key: request.headers.get('CF-Connecting-IP') ?? 'local' });
  if (!limited.success) return json({ error: 'try_later' }, 429);
  const body = await readBody(request);
  if (!body || body.consent !== true || body.consentVersion !== storyConsentVersion) return json({ error: 'consent_required' }, 400);
  if (typeof body.lang !== 'string' || !['de', 'en'].includes(body.lang) || typeof body.category !== 'string' || !categories.includes(body.category) ||
    typeof body.story !== 'string' || body.story.trim().length < 20 || body.story.length > 6000) return json({ error: 'invalid_story' }, 400);
  const story = body.story.trim();
  if (identifierPatterns.some(pattern => pattern.test(story))) return json({ error: 'identifying_details' }, 422);
  const day = new Date().toISOString().slice(0, 10);
  const counted = await env.DB.prepare('INSERT INTO story_days (day, count) VALUES (?, 1) ON CONFLICT(day) DO UPDATE SET count = count + 1 RETURNING count').bind(day).first<{ count: number }>();
  if (!counted || counted.count > storiesPerDay) return json({ error: 'daily_limit' }, 429);
  const response = await github(env, `/repos/${storyRepo}/issues`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: storyTitle(story, body.lang), body: storyBody(story, body.lang, body.category), labels: [storyLabel, body.lang] }),
  });
  if (!response.ok) return json({ error: 'temporarily_unavailable' }, 503);
  const issue = await response.json<{ number: number; html_url: string }>();
  await caches.default.delete(storiesCacheKey(body.lang));
  return json({ published: true, number: issue.number, url: issue.html_url }, 201);
}

const storiesCacheKey = (lang: string) => `https://percepta.moinsen.dev/__stories/${lang}`;

async function storiesHtml(env: StoryEnv, lang: 'de' | 'en') {
  const cached = await caches.default.match(storiesCacheKey(lang));
  if (cached) return cached.text();
  const response = await github(env, `/repos/${storyRepo}/issues?labels=${storyLabel},${lang}&state=open&per_page=50&sort=created&direction=desc`);
  if (!response.ok) return null;
  const issues = await response.json<{ number: number; title: string; body: string | null; created_at: string; html_url: string; pull_request?: unknown }[]>();
  const items = issues.filter(issue => !issue.pull_request && issue.body?.includes(storyStart)).map(issue => {
    const text = issue.body!.split(storyStart)[1].split(storyEnd)[0].trim();
    const title = issue.title.replace(/^(Geschichte|Story):\s*/, '');
    const date = new Date(issue.created_at).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const paragraphs = text.split(/\n{2,}/).map(part => `<p>${escapeHtml(part).replace(/\n/g, '<br>')}</p>`).join('');
    return `<article class="story" aria-labelledby="story-${issue.number}"><h2 id="story-${issue.number}">${escapeHtml(title)}</h2><p class="story-meta">${date} · <a href="${escapeHtml(issue.html_url)}">${lang === 'de' ? `Auf GitHub ansehen (Nr. ${issue.number})` : `View on GitHub (no. ${issue.number})`}</a></p>${paragraphs}</article>`;
  });
  const html = items.length ? items.join('') : `<p>${lang === 'de' ? 'Noch keine Geschichten. Deine könnte die erste sein.' : 'No stories yet. Yours could be the first.'}</p>`;
  await caches.default.put(storiesCacheKey(lang), new Response(html, { headers: { 'Cache-Control': 'max-age=300' } }));
  return html;
}

// Pages with live content: fetch the static page without the browser's validators, so a 304 never serves an outdated list.
async function livePage(request: Request, env: StoryEnv, open: boolean, selector: string, html: () => Promise<string | null>) {
  const page = await env.ASSETS.fetch(new Request(request.url));
  if (!page.ok || !open) return page;
  const content = await html().catch(() => null);
  if (content === null) return page;
  const response = new HTMLRewriter().on(selector, { element: element => { element.setInnerContent(content, { html: true }); } }).transform(page);
  const headers = new Headers(response.headers);
  headers.delete('ETag');
  headers.set('Cache-Control', 'no-cache');
  return new Response(response.body, { status: response.status, headers });
}

async function storiesPage(request: Request, env: StoryEnv, lang: 'de' | 'en') {
  return livePage(request, env, storiesOpen(env), '[data-stories]', () => storiesHtml(env, lang));
}

// Named portraits (D-20): submitted with explicit consent, public only after the operator approves them.
const portraitConsentVersion = 'public-portrait-2026-10-21';
const peopleOpen = (env: StoryEnv) => env.PEOPLE_OPEN === 'true';
const withdrawCode = /^[a-z2-9]{5}(?:-[a-z2-9]{5}){3}$/;
const pendingDays = 60;
type Person = { id: string; created_at: number; published_at: number | null; lang: string; name: string; about: string; story: string; photo_alt: string | null; has_photo: number; contact: string | null };

// Keeps only the image data: drops APP1–APP15 (EXIF, XMP, GPS) and comment segments.
function stripJpeg(bytes: Uint8Array) {
  if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
  const parts = [bytes.subarray(0, 2)];
  let i = 2;
  while (i + 4 <= bytes.length) {
    if (bytes[i] !== 0xff) return null;
    const marker = bytes[i + 1];
    if (marker === 0xda) { parts.push(bytes.subarray(i)); break; }
    const length = (bytes[i + 2] << 8) | bytes[i + 3];
    if (length < 2 || i + 2 + length > bytes.length) return null;
    if (!(marker >= 0xe1 && marker <= 0xef) && marker !== 0xfe) parts.push(bytes.subarray(i, i + 2 + length));
    i += 2 + length;
  }
  const scan = parts[parts.length - 1];
  if (parts.length < 2 || scan[0] !== 0xff || scan[1] !== 0xda) return null;
  const out = new Uint8Array(parts.reduce((sum, part) => sum + part.length, 0));
  let offset = 0;
  for (const part of parts) { out.set(part, offset); offset += part.length; }
  return out;
}

async function isAdmin(request: Request, env: StoryEnv) {
  const given = request.headers.get('Authorization')?.match(/^Bearer (.+)$/)?.[1];
  if (!env.ADMIN_TOKEN || !given) return false;
  const encode = async (value: string) => new TextEncoder().encode(await hashToken(value));
  return crypto.subtle.timingSafeEqual(await encode(given), await encode(env.ADMIN_TOKEN));
}

const field = (value: unknown, max: number) => typeof value === 'string' && value.trim().length <= max ? value.trim() : null;

async function createPortrait(request: Request, env: StoryEnv) {
  if (!peopleOpen(env)) return json({ error: 'people_closed' }, 503);
  const body = await readBody(request, 1_500_000);
  if (!body || body.consent !== true || body.consentVersion !== portraitConsentVersion) return json({ error: 'consent_required' }, 400);
  const name = field(body.name, 80), about = field(body.about ?? '', 200), story = field(body.story, 6000), contact = field(body.contact, 200);
  if (typeof body.lang !== 'string' || !['de', 'en'].includes(body.lang) || typeof body.code !== 'string' || !withdrawCode.test(body.code) ||
    !name || about === null || !story || story.length < 50 || !contact) return json({ error: 'invalid_portrait' }, 400);
  if (identifierPatterns.some(pattern => pattern.test(name) || pattern.test(about) || pattern.test(story))) return json({ error: 'identifying_details' }, 422);
  let photo: Uint8Array | null = null;
  const photoAlt = field(body.photoAlt ?? '', 400);
  if (body.photo != null) {
    if (body.photoConsent !== true || !photoAlt || typeof body.photo !== 'string') return json({ error: 'photo_consent_required' }, 400);
    try { photo = Uint8Array.from(atob(body.photo), char => char.charCodeAt(0)); } catch { return json({ error: 'invalid_photo' }, 400); }
    photo = photo.length <= 1_000_000 ? stripJpeg(photo) : null;
    if (!photo) return json({ error: 'invalid_photo' }, 400);
  }
  const now = Date.now();
  await env.DB.batch([
    env.DB.prepare('DELETE FROM people WHERE published_at IS NULL AND created_at <= ?').bind(now - pendingDays * 86400000),
    env.DB.prepare('INSERT INTO people (id, created_at, lang, name, about, story, photo, photo_alt, contact, consent_version) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO NOTHING')
      .bind(await hashToken(body.code), now, body.lang, name, about, story, photo ? photo.slice().buffer : null, photo ? photoAlt : null, contact, portraitConsentVersion),
  ]);
  return json({ received: true }, 201);
}

async function photoResponse(env: StoryEnv, id: string, publishedOnly: boolean) {
  const row = await env.DB.prepare(`SELECT photo FROM people WHERE id = ? AND photo IS NOT NULL${publishedOnly ? ' AND published_at IS NOT NULL' : ''}`).bind(id).first<{ photo: number[] | ArrayBuffer }>();
  if (!row) return json({ error: 'not_found' }, 404);
  return new Response(new Uint8Array(row.photo), { headers: { 'Content-Type': 'image/jpeg', 'Cache-Control': publishedOnly ? 'public, max-age=3600' : 'no-store', 'X-Content-Type-Options': 'nosniff' } });
}

async function peopleApi(request: Request, env: StoryEnv, url: URL) {
  const photoId = url.pathname.match(/^\/api\/(admin\/)?people\/photo\/([a-f0-9]{64})$/);
  if (photoId && request.method === 'GET') {
    if (photoId[1]) return await isAdmin(request, env) ? photoResponse(env, photoId[2], false) : json({ error: 'unauthorized' }, 401);
    return peopleOpen(env) ? photoResponse(env, photoId[2], true) : json({ error: 'not_found' }, 404);
  }
  if (url.pathname === '/api/admin/people' && request.method === 'GET') {
    if (!await isAdmin(request, env)) return json({ error: 'unauthorized' }, 401);
    const { results } = await env.DB.prepare('SELECT id, created_at, published_at, lang, name, about, story, photo_alt, photo IS NOT NULL AS has_photo, contact FROM people ORDER BY published_at IS NOT NULL, created_at DESC').all<Person>();
    return json({ people: results });
  }
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
  if (request.headers.get('Origin') !== url.origin) return json({ error: 'origin_not_allowed' }, 403);
  if (request.headers.get('Content-Type')?.split(';')[0] !== 'application/json') return json({ error: 'json_required' }, 415);
  if (url.pathname === '/api/admin/people/approve' || url.pathname === '/api/admin/people/delete') {
    if (!await isAdmin(request, env)) return json({ error: 'unauthorized' }, 401);
    const body = await readBody(request);
    if (!body || typeof body.id !== 'string' || !/^[a-f0-9]{64}$/.test(body.id)) return json({ error: 'invalid_request' }, 400);
    // Approval publishes the portrait and removes the private contact, which was only needed for the check.
    if (url.pathname.endsWith('/approve')) await env.DB.prepare('UPDATE people SET published_at = ?, contact = NULL WHERE id = ? AND published_at IS NULL').bind(Date.now(), body.id).run();
    else await env.DB.prepare('DELETE FROM people WHERE id = ?').bind(body.id).run();
    return json({ done: true });
  }
  const limited = await env.INTAKE_LIMIT.limit({ key: request.headers.get('CF-Connecting-IP') ?? 'local' });
  if (!limited.success) return json({ error: 'try_later' }, 429);
  if (url.pathname === '/api/people') return createPortrait(request, env);
  if (url.pathname === '/api/people/withdraw') {
    const body = await readBody(request);
    if (!body || typeof body.code !== 'string' || !withdrawCode.test(body.code)) return json({ error: 'invalid_request' }, 400);
    await env.DB.prepare('DELETE FROM people WHERE id = ?').bind(await hashToken(body.code)).run();
    return json({ deleted: true });
  }
  return json({ error: 'not_found' }, 404);
}

async function peopleHtml(env: StoryEnv, lang: 'de' | 'en') {
  const { results } = await env.DB.prepare('SELECT id, lang, name, about, story, photo_alt, photo IS NOT NULL AS has_photo FROM people WHERE published_at IS NOT NULL ORDER BY published_at DESC LIMIT 100').all<Person>();
  const items = results.map(person => {
    const paragraphs = person.story.split(/\n{2,}/).map(part => `<p>${escapeHtml(part).replace(/\n/g, '<br>')}</p>`).join('');
    const photo = person.has_photo ? `<img class="person-photo" src="/api/people/photo/${person.id}" alt="${escapeHtml(person.photo_alt ?? '')}" loading="lazy">` : '';
    return `<article class="person"${person.lang === lang ? '' : ` lang="${person.lang}"`} aria-labelledby="person-${person.id.slice(0, 12)}">${photo}<div><h2 id="person-${person.id.slice(0, 12)}">${escapeHtml(person.name)}</h2>${person.about ? `<p class="person-about">${escapeHtml(person.about)}</p>` : ''}${paragraphs}</div></article>`;
  });
  return items.length ? items.join('') : null;
}

async function peoplePage(request: Request, env: StoryEnv, lang: 'de' | 'en') {
  return livePage(request, env, peopleOpen(env), '[data-people]', () => peopleHtml(env, lang));
}

async function readBody(request: Request, limit = 32768): Promise<Record<string, unknown> | null> {
  const reader = request.body?.getReader();
  if (!reader) return null;
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > limit) { await reader.cancel(); return null; }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  try {
    const data: unknown = JSON.parse(new TextDecoder().decode(bytes));
    return data !== null && typeof data === 'object' && !Array.isArray(data) ? data as Record<string, unknown> : null;
  } catch { return null; }
}

async function hashToken(token: string) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token));
  return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
}

export default {
  async fetch(request, env: StoryEnv) {
    const url = new URL(request.url);
    const storiesLang = url.pathname.match(/^\/(de|en)\/stories\/$/)?.[1] as 'de' | 'en' | undefined;
    if (storiesLang && request.method === 'GET') return storiesPage(request, env, storiesLang);
    const peopleLang = url.pathname.match(/^\/(de|en)\/people\/$/)?.[1] as 'de' | 'en' | undefined;
    if (peopleLang && request.method === 'GET') return peoplePage(request, env, peopleLang);
    if (url.pathname.startsWith('/api/people') || url.pathname.startsWith('/api/admin/')) {
      // Never log request bodies, contacts or photos.
      try { return await peopleApi(request, env, url); } catch { return json({ error: 'temporarily_unavailable' }, 503); }
    }
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (url.pathname === '/api/intake-status' && request.method === 'GET') {
      return json({ open: env.INTAKE_OPEN === 'true', consentVersion, retentionDays, storiesOpen: storiesOpen(env), storyConsentVersion, peopleOpen: peopleOpen(env), portraitConsentVersion });
    }
    if (url.pathname === '/api/stories') {
      if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
      if (request.headers.get('Origin') !== url.origin) return json({ error: 'origin_not_allowed' }, 403);
      if (request.headers.get('Content-Type')?.split(';')[0] !== 'application/json') return json({ error: 'json_required' }, 415);
      try { return await createStory(request, env); } catch { return json({ error: 'temporarily_unavailable' }, 503); }
    }
    const remove = url.pathname === '/api/experiences/delete';
    if (url.pathname !== '/api/experiences' && !remove) return json({ error: 'not_found' }, 404);
    if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
    if (request.headers.get('Origin') !== url.origin) return json({ error: 'origin_not_allowed' }, 403);
    if (request.headers.get('Content-Type')?.split(';')[0] !== 'application/json') return json({ error: 'json_required' }, 415);
    if (!remove && env.INTAKE_OPEN !== 'true') return json({ error: 'intake_closed' }, 503);
    try {
      const limited = await env.INTAKE_LIMIT.limit({ key: request.headers.get('CF-Connecting-IP') ?? 'local' });
      if (!limited.success) return json({ error: 'try_later' }, 429);
      const body = await readBody(request);
      if (!body || typeof body.token !== 'string' || !/^[a-f0-9]{64}$/.test(body.token)) return json({ error: 'invalid_request' }, 400);
      const id = await hashToken(body.token);
      if (remove) {
        await env.DB.prepare('DELETE FROM experiences WHERE id = ?').bind(id).run();
        return json({ deleted: true });
      }
      if (body.consent !== true || body.consentVersion !== consentVersion) return json({ error: 'consent_required' }, 400);
      if (typeof body.lang !== 'string' || !['de', 'en'].includes(body.lang) || typeof body.category !== 'string' || !categories.includes(body.category) ||
        typeof body.report !== 'string' || !body.report.trim() || body.report.length > 6000) return json({ error: 'invalid_report' }, 400);
      const now = Date.now();
      await env.DB.batch([
        env.DB.prepare('DELETE FROM experiences WHERE expires_at <= ?').bind(now),
        env.DB.prepare('INSERT INTO experiences (id, created_at, expires_at, lang, category, report, consent_version) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO NOTHING')
          .bind(id, now, now + retentionDays * 86400000, body.lang, body.category, body.report.trim(), consentVersion),
      ]);
      // A retry is accepted only for the same approved text. Never silently replace a report.
      const stored = await env.DB.prepare('SELECT report, category, expires_at FROM experiences WHERE id = ?').bind(id).first<{ report: string; category: string; expires_at: number }>();
      if (!stored || stored.report !== body.report.trim() || stored.category !== body.category) return json({ error: 'retry_conflict' }, 409);
      return json({ received: true, reference: id.slice(0, 12), expiresAt: stored.expires_at }, 201);
    } catch {
      // Never log request bodies, tokens or database errors containing participant data.
      return json({ error: 'temporarily_unavailable' }, 503);
    }
  },
  async scheduled(_event, env) {
    await env.DB.prepare('DELETE FROM experiences WHERE expires_at <= ?').bind(Date.now()).run();
    await env.DB.prepare('DELETE FROM people WHERE published_at IS NULL AND created_at <= ?').bind(Date.now() - pendingDays * 86400000).run();
  },
} satisfies ExportedHandler<Env>;
