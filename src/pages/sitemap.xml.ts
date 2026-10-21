import type { APIContext } from 'astro';
import { articles, languages, pathFor } from '../content/site';

export function GET({ site }: APIContext) {
  const paths = ['/', ...languages.flatMap(lang =>
    ['', 'participate', 'stories', ...Object.keys(articles[lang])].map(page => pathFor(lang, page)),
  )];
  const urls = paths.map(path => `<url><loc>${new URL(path, site).href.replace(/&/g, '&amp;')}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
