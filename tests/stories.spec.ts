import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { randomBytes } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const origin = 'http://127.0.0.1:4322';
const headers = () => ({ Origin: origin, 'CF-Connecting-IP': `test-${randomBytes(8).toString('hex')}` });
const story = (text: string) => ({ lang: 'de', category: 'shopping', story: text, consent: true, consentVersion: 'public-story-2026-10-21' });
const sql = (command: string) => execFileSync(process.execPath, ['node_modules/wrangler/bin/wrangler.js', 'd1', 'execute', 'percepta-experiences', '--local', '--persist-to', '.wrangler/intake-test', '--command', command, '--json'], { encoding: 'utf8' });

test.describe.configure({ mode: 'serial' });
test.beforeAll(() => { sql('DELETE FROM story_days'); });

test('closed production configuration offers no publishing and keeps the static stories page', async ({ request, page }) => {
  const status = await (await request.get('/api/intake-status')).json();
  expect(status.storiesOpen).toBe(false);
  const response = await request.post('/api/stories', { headers: { Origin: 'http://127.0.0.1:4321' }, data: story('Fiktive Geschichte: Packungen beim Einkaufen unterscheiden.') });
  expect(response.status()).toBe(503);
  await page.goto('/de/stories/');
  await expect(page.locator('[data-stories]')).toContainText('sobald die ersten');
});

test('story API requires consent and refuses contact details, links and foreign origins', async ({ request }) => {
  expect((await request.post(`${origin}/api/stories`, { headers: headers(), data: { ...story('Fiktive Geschichte ohne Zustimmung zum Testen.'), consent: false } })).status()).toBe(400);
  expect((await request.post(`${origin}/api/stories`, { headers: headers(), data: story('zu kurz') })).status()).toBe(400);
  for (const text of ['Fiktiv: Schreib mir an test@example.org bitte.', 'Fiktiv: Ruf mich an unter 0171 1234567.', 'Fiktiv: Mehr unter https://example.org nachlesen.']) {
    const response = await request.post(`${origin}/api/stories`, { headers: headers(), data: story(text) });
    expect(response.status(), text).toBe(422);
  }
  expect((await request.post(`${origin}/api/stories`, { headers: { ...headers(), Origin: 'https://example.org' }, data: story('Fiktive Geschichte von fremder Herkunft.') })).status()).toBe(403);
  const issues = await (await request.get('http://127.0.0.1:4323/__issues', { headers: { Authorization: 'Bearer test-token' } })).json();
  expect(issues).toEqual([]);
});

test('publishing from the participation page creates a labelled issue and shows it escaped on the stories page', async ({ page, request }) => {
  const title = `Fiktive Probe ${randomBytes(3).toString('hex')}`;
  await page.goto(`${origin}/de/participate/`);
  await expect(page.locator('#intake-message')).toContainText('als Geschichte veröffentlichen');
  await expect(page.locator('#experience-publish-controls')).toBeHidden();
  await page.locator('#experience-report').fill(`Titel: ${title}\n\nIch will zwei Packungen <b>unterscheiden</b>. @jemand soll nicht erwähnt werden.`);
  await page.locator('#experience-preview').click();
  await expect(page.locator('#review-title')).toBeFocused();
  await expect(page.locator('#experience-publish-controls')).toBeVisible();
  await page.locator('#experience-publish').click();
  await expect(page.locator('#experience-feedback')).toContainText('Ohne deine ausdrückliche Zustimmung');
  await expect(page.locator('#publish-consent')).toBeFocused();
  await page.locator('#publish-consent').check();
  await page.locator('#experience-publish').click();
  await expect(page.locator('#publish-title')).toBeFocused();
  await expect(page.locator('#publish-reference')).toContainText('Nummer deiner Geschichte');

  const issues = await (await request.get('http://127.0.0.1:4323/__issues', { headers: { Authorization: 'Bearer test-token' } })).json();
  expect(issues[0].title).toBe(`Geschichte: ${title}`);
  expect(issues[0].labels).toEqual(['geschichte', 'de']);
  expect(issues[0].body).toContain('<!-- percepta-story -->');
  expect(issues[0].body).toContain('@​jemand');

  await page.goto(`${origin}/de/stories/`);
  const stories = page.locator('[data-stories]');
  await expect(stories.getByRole('heading', { name: title })).toBeVisible();
  await expect(stories).toContainText('<b>unterscheiden</b>');
  expect(await stories.locator('b').count()).toBe(0);
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()).violations).toEqual([]);
  await page.goto(`${origin}/en/stories/`);
  await expect(page.locator('[data-stories]')).not.toContainText(title);
});

test('daily limit stops further stories without calling GitHub', async ({ request }) => {
  sql(`INSERT INTO story_days (day, count) VALUES ('${new Date().toISOString().slice(0, 10)}', 30) ON CONFLICT(day) DO UPDATE SET count = 30`);
  const before = (await (await request.get('http://127.0.0.1:4323/__issues', { headers: { Authorization: 'Bearer test-token' } })).json()).length;
  const response = await request.post(`${origin}/api/stories`, { headers: headers(), data: story('Fiktive Geschichte über dem Tageslimit zum Testen.') });
  expect(response.status()).toBe(429);
  expect((await (await request.get('http://127.0.0.1:4323/__issues', { headers: { Authorization: 'Bearer test-token' } })).json()).length).toBe(before);
  sql('DELETE FROM story_days');
});
