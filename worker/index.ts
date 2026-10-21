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
type StoryEnv = Env & { GITHUB_TOKEN?: string };
const storiesOpen = (env: StoryEnv) => env.STORIES_OPEN === 'true' && Boolean(env.GITHUB_TOKEN);
const github = (env: StoryEnv, path: string, init: RequestInit = {}) => fetch(`${env.GITHUB_API_URL}${path}`, {
  ...init,
  headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${env.GITHUB_TOKEN}`, 'User-Agent': 'percepta-community', 'X-GitHub-Api-Version': '2022-11-28', ...init.headers },
});
// Contact details and links make a story identifiable or spammy; such texts are refused, not cleaned.
const identifierPatterns = [/[^\s@]+@[^\s@]+\.[a-z]{2,}/i, /(?:\+|\b0)\d[\d\s/()-]{6,}\d/, /https?:\/\/|www\./i];
const escapeHtml = (text: string) => text.replace(/[&<>"']/g, char => `&#${char.charCodeAt(0)};`);

function storyTitle(story: string, lang: string) {
  const line = story.match(/^\s*(?:Titel|Title)\s*:?\s*(.+)$/im)?.[1] ?? story.split('\n').find(part => part.trim()) ?? '';
  const title = line.replace(/[#*_`]/g, '').trim().slice(0, 80);
  return `${lang === 'de' ? 'Geschichte' : 'Story'}: ${title || (lang === 'de' ? 'Ohne Titel' : 'Untitled')}`;
}

function storyBody(story: string, lang: string, category: string) {
  // A zero-width space after @ prevents accidental GitHub mentions.
  const text = story.replace(/@/g, '@\u200b');
  const footer = lang === 'de'
    ? `Bereich laut Formular: ${category}. Ohne Namen über percepta.moinsen.dev eingereicht; die Person hat der Veröffentlichung dieses Textes ausdrücklich zugestimmt (${storyConsentVersion}). Entfernen auf Anfrage an business@moinsen.dev.`
    : `Area from the form: ${category}. Submitted without a name via percepta.moinsen.dev; the person explicitly agreed to publishing this text (${storyConsentVersion}). Removal on request to business@moinsen.dev.`;
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

async function storiesPage(request: Request, env: StoryEnv, lang: 'de' | 'en') {
  const page = await env.ASSETS.fetch(request);
  if (!page.ok || !storiesOpen(env)) return page;
  const html = await storiesHtml(env, lang).catch(() => null);
  if (html === null) return page;
  return new HTMLRewriter().on('[data-stories]', { element: element => { element.setInnerContent(html, { html: true }); } }).transform(page);
}

async function readBody(request: Request): Promise<Record<string, unknown> | null> {
  const reader = request.body?.getReader();
  if (!reader) return null;
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 32768) { await reader.cancel(); return null; }
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
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (url.pathname === '/api/intake-status' && request.method === 'GET') {
      return json({ open: env.INTAKE_OPEN === 'true', consentVersion, retentionDays, storiesOpen: storiesOpen(env), storyConsentVersion });
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
  },
} satisfies ExportedHandler<Env>;
