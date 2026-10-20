import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { languages, articles } from '../src/content/site';
import { readFileSync } from 'node:fs';

const routes = ['/', '/404.html', ...languages.flatMap(lang =>
  ['', 'participate', ...Object.keys(articles[lang])].map(slug => `/${lang}/${slug ? `${slug}/` : ''}`),
)];

for (const route of routes) {
  test(`accessible structure and links: ${route}`, async ({ page, request }) => {
    await page.goto(route);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.getByRole('main')).toHaveCount(1);
    await expect(page.locator('html')).toHaveAttribute('lang', route.startsWith('/en/') ? 'en' : 'de');
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(result.violations).toEqual([]);
    const links = await page.locator('a[href]').evaluateAll(elements => elements.map(a => (a as HTMLAnchorElement).href));
    for (const href of new Set(links)) {
      const url = new URL(href);
      if (url.origin !== 'http://127.0.0.1:4321') continue;
      const response = await request.get(url.pathname);
      expect(response.status(), href).toBeLessThan(400);
      if (url.hash) expect(await response.text(), href).toContain(`id="${url.hash.slice(1)}"`);
    }
    await page.setViewportSize({ width: 320, height: 800 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(await page.locator('h1, h2, h3').evaluateAll(elements =>
      elements.filter(el => el.scrollWidth > el.clientWidth + 1).map(el => el.textContent),
    )).toEqual([]);
  });
}

for (const lang of languages) {
  test(`keyboard, copy, failure recovery and language switch: ${lang}`, async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const externalRequests: string[] = [];
    page.on('request', req => { if (!req.url().startsWith('http://127.0.0.1:4321/')) externalRequests.push(req.url()); });
    await page.goto(`/${lang}/participate/`);
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main')).toBeFocused();
    const copy = page.locator('[data-copy="manual"]');
    for (let i = 0; i < 30 && !(await copy.evaluate(el => el === document.activeElement)); i++) await page.keyboard.press('Tab');
    await expect(copy).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#manual-status')).toContainText(lang === 'de' ? 'Kopiert' : 'Copied');
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(await page.locator('#manual-text').textContent());
    await page.evaluate(() => { navigator.clipboard.writeText = async () => { throw new DOMException('Denied', 'NotAllowedError'); }; });
    await page.locator('[data-copy="prompt"]').click();
    await expect(page.locator('#prompt-status')).toContainText(lang === 'de' ? 'Bitte markiere' : 'Please select');
    expect(errors).toEqual([]);
    expect(externalRequests).toEqual([]);
    await page.locator('a.language').click();
    await expect(page).toHaveURL(new RegExp(`/${lang === 'de' ? 'en' : 'de'}/participate/$`));
  });

  test(`without JavaScript, downloads match canonical templates: ${lang}`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:4321/${lang}/participate/`);
    await expect(page.locator('[data-copy]')).toHaveCount(2);
    await expect(page.locator('[data-copy="prompt"]')).toBeHidden();
    await expect(page.locator('#manual-text')).toBeVisible();
    await expect(page.locator('#prompt-text')).toBeVisible();
    for (const kind of ['manual', 'prompt']) {
      const response = await context.request.get(`http://127.0.0.1:4321/templates/${lang}-${kind}.txt`);
      expect(response.status()).toBe(200);
      const source = readFileSync(`docs/${kind === 'prompt' ? 'interview-prompt' : 'experience-template'}.${lang}.md`, 'utf8');
      const text = await response.text();
      expect(source).toContain(text.trim());
      expect(text.trim()).toBe((await page.locator(`#${kind}-text`).textContent())?.trim());
    }
    await context.close();
  });
}

test('security headers and real 404 response on the Cloudflare runtime', async ({ request }) => {
  const response = await request.get('/de/');
  expect(response.headers()['content-security-policy']).toContain("form-action 'none'");
  expect(response.headers()['permissions-policy']).toContain('camera=()');
  expect(response.headers()['referrer-policy']).toBe('no-referrer');
  const missing = await request.get('/this-page-does-not-exist/');
  expect(missing.status()).toBe(404);
  expect(await missing.text()).toContain('Page not found.');
});
