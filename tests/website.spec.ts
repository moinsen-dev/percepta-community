import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { languages, articles } from '../src/content/site';
import { readFileSync } from 'node:fs';

const routes = ['/', '/404.html', ...languages.flatMap(lang =>
  ['', 'participate', 'stories', 'people', 'usecases', ...Object.keys(articles[lang])].map(slug => `/${lang}/${slug ? `${slug}/` : ''}`),
)];

for (const route of routes) {
  test(`accessible structure and links: ${route}`, async ({ page, request, context }) => {
    const thirdPartyRequests: string[] = [];
    page.on('request', req => {
      if (new URL(req.url()).origin !== 'http://127.0.0.1:4321') thirdPartyRequests.push(req.url());
    });
    await page.goto(route);
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.getByRole('main')).toHaveCount(1);
    await expect(page.locator('html')).toHaveAttribute('lang', route.startsWith('/en/') ? 'en' : 'de');
    if (route !== '/404.html') {
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://percepta.moinsen.dev${route}`);
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', `https://percepta.moinsen.dev${route}`);
      const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? '{}');
      expect(schema.url).toBe(`https://percepta.moinsen.dev${route}`);
      expect(schema['@type']).toBe('WebPage');
      const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll(elements => elements.map(el => el.getAttribute('href')));
      for (const alternate of alternates) expect((await request.get(new URL(alternate!).pathname)).status()).toBe(200);
    }
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(result.violations).toEqual([]);
    expect(thirdPartyRequests).toEqual([]);
    expect(await context.cookies()).toEqual([]);
    expect(await page.evaluate(() => [localStorage.length, sessionStorage.length])).toEqual([0, 0]);
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
    await page.locator('details.template summary').click();
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

test('former research and collaborate pages redirect to the about page', async ({ request }) => {
  for (const [from, to] of [['/de/research/', '/de/about/'], ['/de/collaborate/', '/de/about/#mitwirken'], ['/en/research/', '/en/about/'], ['/en/collaborate/', '/en/about/#get-involved']]) {
    const response = await request.get(from, { maxRedirects: 0 });
    expect(response.status(), from).toBe(301);
    expect(response.headers().location, from).toBe(to);
  }
});

test('robots and sitemap expose every public page without private API or error routes', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain('Sitemap: https://percepta.moinsen.dev/sitemap.xml');
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.status()).toBe(200);
  const xml = await sitemap.text();
  const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  expect(locations.sort()).toEqual(routes.filter(route => route !== '/404.html').map(route => `https://percepta.moinsen.dev${route}`).sort());
  expect(xml).not.toContain('/api/');
});

for (const lang of languages) {
  test(`navigation guide is reachable, keyboard usable and translated without JavaScript: ${lang}`, async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:4321/${lang}/tools/`);
    await page.locator(`.prose a[href="/${lang}/navigation/"]`).click();
    await expect(page).toHaveURL(new RegExp(`/${lang}/navigation/$`));

    const anchor = lang === 'de' ? 'draussen' : 'outdoors';
    await page.locator(`.prose a[href="#${anchor}"]`).focus();
    await page.keyboard.press('Enter');
    await expect(page.locator(`#${anchor}`)).toBeFocused();

    await page.locator('a.language').click();
    const other = lang === 'de' ? 'en' : 'de';
    await expect(page).toHaveURL(new RegExp(`/${other}/navigation/$`));
    await expect(page.locator('html')).toHaveAttribute('lang', other);
    await page.locator(`.prose a[href="/${other}/tools/"]`).click();
    await expect(page).toHaveURL(new RegExp(`/${other}/tools/$`));
    await context.close();
  });
}
