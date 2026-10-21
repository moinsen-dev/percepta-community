const categories = ['shopping', 'questions', 'interaction', 'orientation', 'other'];
const consentVersion = 'private-pilot-2026-10-21';
const retentionDays = 30; // Proposed pilot policy; intake stays closed until operating review.
const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'X-Robots-Tag': 'noindex', 'Referrer-Policy': 'no-referrer' };
const json = (value: object, status = 200) => Response.json(value, { status, headers });

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
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/api/')) return env.ASSETS.fetch(request);
    if (url.pathname === '/api/intake-status' && request.method === 'GET') {
      return json({ open: env.INTAKE_OPEN === 'true', consentVersion, retentionDays });
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
