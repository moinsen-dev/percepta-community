import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { randomBytes } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const origin = 'http://127.0.0.1:4322';
const admin = { Authorization: 'Bearer test-admin' };
const headers = () => ({ Origin: origin, 'CF-Connecting-IP': `test-${randomBytes(8).toString('hex')}` });
const code = () => Array.from({ length: 4 }, () => Array.from(randomBytes(5), byte => 'abcdefghijkmnpqrstuvwxyz23456789'[byte % 32]).join('')).join('-');
const story = 'Fiktive Testgeschichte: Ich erzähle hier, wie ich mit einer Ansage-App einkaufe und was mir dabei noch fehlt.';
const portrait = (extra: object = {}) => ({ lang: 'de', name: 'Fiktive Testperson', about: 'Erfunden für einen Test.', story, contact: 'test@example.org', consent: true, consentVersion: 'public-portrait-2026-10-21', code: code(), ...extra });
const sql = (command: string) => execFileSync(process.execPath, ['node_modules/wrangler/bin/wrangler.js', 'd1', 'execute', 'percepta-experiences', '--local', '--persist-to', '.wrangler/intake-test', '--command', command, '--json'], { encoding: 'utf8' });
const people = async (request: import('@playwright/test').APIRequestContext) => (await (await request.get(`${origin}/api/admin/people`, { headers: admin })).json()).people as { id: string; name: string; contact: string | null; published_at: number | null }[];
const image = (page: Page, type: string) => page.evaluate(type => {
  const canvas = document.createElement('canvas');
  canvas.width = 40; canvas.height = 30;
  const context = canvas.getContext('2d')!;
  context.fillStyle = '#173f38'; context.fillRect(0, 0, 40, 30);
  return canvas.toDataURL(type).split(',')[1];
}, type);

const emails = async (request: import('@playwright/test').APIRequestContext) => (await (await request.get('http://127.0.0.1:4323/__emails', { headers: { Authorization: 'Bearer test-resend' } })).json()) as { from: string; to: string[]; subject: string; text: string }[];

test.describe.configure({ mode: 'serial' });
// Each test gets its own client address, so the shared rate limit does not leak between tests.
test.beforeEach(({ page }) => page.setExtraHTTPHeaders({ 'CF-Connecting-IP': `test-${randomBytes(8).toString('hex')}` }));
test.beforeAll(() => { sql('DELETE FROM people'); });

test('closed configuration accepts no portraits and keeps the admin API locked', async ({ request, page }) => {
  expect((await (await request.get('/api/intake-status')).json()).peopleOpen).toBe(false);
  expect((await request.post('/api/people', { headers: { Origin: 'http://127.0.0.1:4321' }, data: portrait() })).status()).toBe(503);
  expect((await request.get('/api/admin/people', { headers: admin })).status()).toBe(401);
  await page.goto('/de/people/');
  await expect(page.locator('[data-people]')).toContainText('bald die ersten Porträts');
  await expect(page.locator('#portrait-status')).toContainText('noch nicht an');
  await expect(page.locator('#portrait-name')).toBeHidden();
});

test('portrait API requires consent, contact and photo description and refuses contact details in public text', async ({ request }) => {
  expect((await request.post(`${origin}/api/people`, { headers: headers(), data: portrait({ consent: false }) })).status()).toBe(400);
  expect((await request.post(`${origin}/api/people`, { headers: headers(), data: portrait({ contact: '' }) })).status()).toBe(400);
  expect((await request.post(`${origin}/api/people`, { headers: headers(), data: portrait({ story: 'Zu kurz.' }) })).status()).toBe(400);
  expect((await request.post(`${origin}/api/people`, { headers: headers(), data: portrait({ story: `${story} Schreib mir an test@example.org.` }) })).status()).toBe(422);
  expect((await request.post(`${origin}/api/people`, { headers: headers(), data: portrait({ photo: 'iVBORw0KGgo=', photoAlt: 'Ein Bild', photoConsent: true }) })).status()).toBe(400);
  expect((await request.post(`${origin}/api/people`, { headers: headers(), data: portrait({ photo: '/9j/', photoConsent: true }) })).status()).toBe(400);
  expect((await request.get(`${origin}/api/admin/people`, { headers: { Authorization: 'Bearer wrong' } })).status()).toBe(401);
  expect(await people(request)).toEqual([]);
});

test('photos lose their metadata and stay private until approval', async ({ request, page }) => {
  await page.goto(`${origin}/de/people/`);
  const jpeg = Buffer.from(await image(page, 'image/jpeg'), 'base64');
  const exif = Buffer.concat([Buffer.from([0xff, 0xe1, 0x00, 0x10]), Buffer.from('Exif\0\0GPSFAKE\0')]);
  const tagged = Buffer.concat([jpeg.subarray(0, 2), exif, jpeg.subarray(2)]);
  expect((await request.post(`${origin}/api/people`, { headers: headers(), data: portrait({ name: 'Fiktive Fotoperson', photo: tagged.toString('base64'), photoAlt: 'Ein grünes Rechteck.', photoConsent: true }) })).status()).toBe(201);
  const [entry] = await people(request);
  expect(entry.published_at).toBeNull();
  expect((await request.get(`${origin}/api/people/photo/${entry.id}`)).status()).toBe(404);
  const stored = await (await request.get(`${origin}/api/admin/people/photo/${entry.id}`, { headers: admin })).body();
  expect(stored.subarray(0, 2)).toEqual(Buffer.from([0xff, 0xd8]));
  expect(stored.includes('GPSFAKE')).toBe(false);
  expect((await request.post(`${origin}/api/admin/people/delete`, { headers: { ...admin, Origin: origin }, data: { id: entry.id } })).status()).toBe(200);
  expect(await people(request)).toEqual([]);
});

test('a portrait goes from the form through approval to the people page and can be withdrawn', async ({ page, request }) => {
  const name = `Fiktive Person ${randomBytes(3).toString('hex')}`;
  await page.goto(`${origin}/de/people/`);
  await expect(page.locator('#portrait-name')).toBeVisible();
  await page.locator('#portrait-send').click();
  await expect(page.locator('#portrait-name')).toBeFocused();
  await page.locator('#portrait-name').fill(name);
  await page.locator('#portrait-story').fill(story);
  await page.locator('#portrait-photo').setInputFiles({ name: 'bild.png', mimeType: 'image/png', buffer: Buffer.from(await image(page, 'image/png'), 'base64') });
  await expect(page.locator('#portrait-alt')).toBeVisible();
  await page.locator('#portrait-contact').fill('fiktiv@example.org');
  await page.locator('#portrait-consent').check();
  await page.locator('#portrait-send').click();
  await expect(page.locator('#portrait-alt')).toBeFocused();
  await page.locator('#portrait-alt').fill('Ein grünes Rechteck als fiktives Porträt.');
  await page.locator('#portrait-photo-consent').check();
  const noticesBefore = (await emails(request)).filter(mail => mail.subject === 'Neues Porträt wartet auf Freigabe').length;
  await page.locator('#portrait-send').click();
  await expect(page.locator('#portrait-receipt-title')).toBeFocused();
  const withdraw = await page.locator('#portrait-code').inputValue();
  expect(withdraw).toMatch(/^[a-z2-9]{5}(?:-[a-z2-9]{5}){3}$/);
  const notices = async () => (await emails(request)).filter(mail => mail.subject === 'Neues Porträt wartet auf Freigabe');
  await expect.poll(async () => (await notices()).length).toBe(noticesBefore + 1);
  for (const notice of await notices()) {
    expect(notice.text).toContain('/admin/people/');
    expect(notice.text).not.toContain(name);
    expect(notice.text).not.toContain('fiktiv@example.org');
  }
  await page.goto(`${origin}/de/people/`);
  await expect(page.locator('[data-people]')).not.toContainText(name);

  await page.goto(`${origin}/admin/people/`);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
  await page.locator('#admin-token').fill('test-admin');
  await page.locator('#admin-load').click();
  await expect(page.locator('#admin-list')).toContainText('fiktiv@example.org');
  await page.getByRole('button', { name: `${name} freigeben` }).click();
  await expect(page.locator('#admin-status')).toContainText('Freigegeben');
  expect((await people(request)).find(person => person.name === name)?.contact).toBeNull();

  await page.goto(`${origin}/de/people/`);
  const list = page.locator('[data-people]');
  await expect(list.getByRole('heading', { name })).toBeVisible();
  await expect(list.getByRole('img', { name: 'Ein grünes Rechteck als fiktives Porträt.' })).toBeVisible();
  await expect(list).not.toContainText('fiktiv@example.org');
  expect((await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()).violations).toEqual([]);
  const etag = (await request.get('/de/people/')).headers().etag;
  const revalidated = await request.get(`${origin}/de/people/`, { headers: { 'If-None-Match': etag } });
  expect(revalidated.status()).toBe(200);
  expect(await revalidated.text()).toContain(name);
  await page.goto(`${origin}/en/people/`);
  await expect(page.locator('article.person[lang="de"]')).toHaveCount(1);

  await page.goto(`${origin}/de/people/`);
  await page.locator('#portrait-withdraw-code').fill(withdraw.toUpperCase());
  await page.locator('#portrait-withdraw').click();
  await expect(page.locator('#portrait-withdraw-status')).toContainText('gelöscht');
  await page.reload();
  await expect(page.locator('[data-people]')).not.toContainText(name);
});
