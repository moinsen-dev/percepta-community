import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { randomBytes } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const origin = 'http://127.0.0.1:4322';
const token = () => randomBytes(32).toString('hex');
const payload = () => ({ token: token(), lang: 'de', category: 'shopping', report: 'Fiktive Probe: Zwei Packungen unterscheiden. Gewünschte Hilfe: Unterschiede vorlesen.', consent: true, consentVersion: 'private-pilot-2026-10-21' });
const headers = () => ({ Origin: origin, 'CF-Connecting-IP': `test-${token()}` });

test('closed production configuration refuses intake without receiving a report', async ({ request }) => {
  expect((await (await request.get('/api/intake-status')).json()).open).toBe(false);
  const response = await request.post('/api/experiences', { headers: { Origin: 'http://127.0.0.1:4321' }, data: payload() });
  expect(response.status()).toBe(503);
  expect(await response.json()).toEqual({ error: 'intake_closed' });
});

test('leaving an unsent draft can be cancelled without losing the text', async ({ page }) => {
  await page.goto('/de/participate/');
  await page.locator('#experience-report').fill('Fiktiver ungesendeter Entwurf.');
  const dialogPromise = page.waitForEvent('dialog');
  const click = page.locator('a.language').click({ noWaitAfter: true });
  const dialog = await dialogPromise;
  expect(dialog.type()).toBe('beforeunload');
  await dialog.dismiss();
  await click;
  await expect(page).toHaveURL(/\/de\/participate\/$/);
  await expect(page.locator('#experience-report')).toHaveValue('Fiktiver ungesendeter Entwurf.');
});

test('private API validates consent, origin, size and schema; never exposes reports', async ({ request }) => {
  const base = payload();
  for (const data of [{ ...base, consent: false }, { ...base, consentVersion: 'old' }, { ...base, category: ['shopping'] }, { ...base, report: ' ' }, { ...base, report: 'a'.repeat(6001) }, { ...base, token: 'guess' }]) {
    expect((await request.post(`${origin}/api/experiences`, { headers: headers(), data })).status()).toBe(400);
  }
  expect((await request.post(`${origin}/api/experiences`, { headers: { Origin: 'https://elsewhere.example' }, data: base })).status()).toBe(403);
  expect((await request.post(`${origin}/api/experiences`, { headers: headers(), data: 'x'.repeat(40000) })).status()).toBe(415);
  expect((await request.post(`${origin}/api/experiences`, { headers: { ...headers(), 'Content-Type': 'application/json' }, data: 'x'.repeat(40000) })).status()).toBe(400);
  const response = await request.get(`${origin}/api/experiences`);
  expect(response.status()).toBe(405);
  expect(response.headers()['cache-control']).toBe('no-store');
  expect(response.headers()['access-control-allow-origin']).toBeUndefined();
});

test('receipt, idempotent retry, conflict and withdrawal use a private capability', async ({ request }) => {
  const data = payload();
  const send = () => request.post(`${origin}/api/experiences`, { headers: headers(), data });
  const first = await send();
  expect(first.status()).toBe(201);
  const receipt = await first.json();
  expect(receipt.received).toBe(true);
  expect(receipt.expiresAt - Date.now()).toBeGreaterThan(29 * 86400000);
  expect(await (await send()).json()).toEqual(receipt);
  expect((await request.post(`${origin}/api/experiences`, { headers: headers(), data: { ...data, report: 'Ein anderer Text.' } })).status()).toBe(409);
  const remove = await request.post(`${origin}/api/experiences/delete`, { headers: headers(), data: { token: data.token } });
  expect(await remove.json()).toEqual({ deleted: true });
  // A second delete is harmless and does not reveal whether a record ever existed.
  expect((await request.post(`${origin}/api/experiences/delete`, { headers: headers(), data: { token: data.token } })).status()).toBe(200);
  const replacement = await request.post(`${origin}/api/experiences`, { headers: headers(), data: { ...data, report: 'Neue fiktive Probe nach Löschung.' } });
  expect(replacement.status()).toBe(201);
  await request.post(`${origin}/api/experiences/delete`, { headers: headers(), data: { token: data.token } });
});

test('scheduled cleanup removes expired records and preserves unexpired reports', async ({ request }) => {
  const expired = token();
  const active = token();
  const sql = (command: string) => execFileSync(process.execPath, ['node_modules/wrangler/bin/wrangler.js', 'd1', 'execute', 'percepta-experiences', '--local', '--persist-to', '.wrangler/intake-test', '--command', command, '--json'], { encoding: 'utf8' });
  sql(`INSERT INTO experiences VALUES ('${expired}', 0, 1, 'de', 'other', 'Fiktive abgelaufene Testprobe', 'test'), ('${active}', 0, ${Date.now() + 86400000}, 'de', 'other', 'Fiktive aktive Testprobe', 'test')`);
  expect((await request.get(`${origin}/cdn-cgi/local/scheduled`)).status()).toBe(200);
  const rows = JSON.parse(sql(`SELECT id FROM experiences WHERE id IN ('${expired}', '${active}')`))[0].results;
  expect(rows).toEqual([{ id: active }]);
  sql(`DELETE FROM experiences WHERE id = '${active}'`);
});

test('abuse limit rejects repeated writes from the same source', async ({ request }) => {
  const same = headers();
  const statuses = [];
  for (let i = 0; i < 12; i++) statuses.push((await request.post(`${origin}/api/experiences`, { headers: same, data: { ...payload(), consent: false } })).status());
  expect(statuses).toContain(429);
});

for (const lang of ['de', 'en']) {
  test(`review, consent, network recovery, receipt and deletion: ${lang}`, async ({ page, context }) => {
    const outgoing: string[] = [];
    const errors: string[] = [];
    page.on('request', req => { if (req.method() === 'POST') outgoing.push(req.url()); });
    page.on('pageerror', error => errors.push(error.message));
    await page.setExtraHTTPHeaders({ 'CF-Connecting-IP': `test-${token()}` });
    await page.goto(`${origin}/${lang}/participate/`);
    await expect(page.locator('#intake-message')).toContainText(lang === 'de' ? 'geöffnet' : 'open');
    await page.locator('#experience-preview').click();
    await expect(page.locator('#experience-report')).toBeFocused();
    const story = 'Fiktive Probe / Fictional test: <script>alert(1)</script> Produkte unterscheiden.';
    await page.locator('#experience-report').fill(story);
    await page.locator('#experience-category').selectOption('shopping');
    expect(outgoing).toEqual([]);
    await page.locator('#experience-preview').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#review-title')).toBeFocused();
    await expect(page.locator('#review-text')).toHaveText(story);
    await expect(page.locator('#experience-consent')).not.toBeChecked();
    await page.locator('#experience-send').click();
    await expect(page.locator('#experience-consent')).toBeFocused();
    expect(outgoing).toEqual([]);
    expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()).violations).toEqual([]);
    await page.locator('#experience-consent').check();
    await page.locator('#experience-edit-button').click();
    await expect(page.locator('#experience-report')).toBeFocused();
    await page.locator('#experience-preview').click();
    await expect(page.locator('#experience-consent')).not.toBeChecked();
    await page.keyboard.press('Tab');
    await expect(page.locator('#experience-edit-button')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#experience-download')).toBeFocused();
    await page.keyboard.press('Tab'); // Privacy information remains reachable before consent.
    await expect(page.locator('#experience-send-controls a')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#experience-consent')).toBeFocused();
    await page.keyboard.press('Space');
    await page.keyboard.press('Tab');
    await expect(page.locator('#experience-send')).toBeFocused();
    // Lose the first successful response, then retry against the real local D1 runtime.
    let first = true;
    await page.route('**/api/experiences', async route => {
      if (first) { first = false; await route.fetch(); await route.abort(); }
      else await route.continue();
    });
    await page.keyboard.press('Enter');
    await expect(page.locator('#experience-feedback')).toContainText(lang === 'de' ? 'nicht bestätigt' : 'not confirmed');
    await expect(page.locator('#review-text')).toHaveText(story);
    await expect(page.locator('#experience-edit-button')).toBeDisabled();
    expect(await page.locator('#withdraw-code').inputValue()).toMatch(/^[a-f0-9]{64}$/);
    await page.locator('#experience-send').click();
    await expect(page.locator('#receipt-title')).toBeFocused();
    const code = await page.locator('#receipt-code').inputValue();
    expect(code).toMatch(/^[a-f0-9]{64}$/);
    expect(await page.evaluate(() => [localStorage.length, sessionStorage.length])).toEqual([0, 0]);
    expect(await context.cookies()).toEqual([]);
    expect(page.url()).not.toContain(code);
    const downloadPromise = page.waitForEvent('download');
    await page.locator('#receipt-download').click();
    expect((await downloadPromise).suggestedFilename()).toBe('percepta-receipt.txt');
    await page.locator('#withdraw-button').click();
    await expect(page.locator('#withdraw-feedback')).toContainText(lang === 'de' ? 'kein Bericht mehr' : 'No report');
    expect(errors).toEqual([]);
  });
}
