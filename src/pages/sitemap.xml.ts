import type { APIRoute } from 'astro';
import { GAMES } from '../data/games';
import { publishedNews } from '../data/news';
import { SITE } from '../data/site';

/** Pages that exist in English and Swedish, by their English path. */
const BILINGUAL = ['/', '/games/', ...GAMES.map((g) => `/games/${g.slug}/`), '/games/other-work/', '/about/', '/tools/', '/privacy/'];
const ENGLISH_ONLY = ['/news/', '/press/', ...GAMES.map((g) => `/press/${g.slug}/`), '/games/terms/', '/games/privacy/'];

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().slice(0, 10);
  const alt = (p: string) =>
    `<xhtml:link rel="alternate" hreflang="en" href="${SITE.url}${p}"/><xhtml:link rel="alternate" hreflang="sv" href="${SITE.url}/sv${p}"/><xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}${p}"/>`;
  const urls: string[] = [];
  for (const p of BILINGUAL) {
    urls.push(`<url><loc>${SITE.url}${p}</loc><lastmod>${today}</lastmod>${alt(p)}</url>`);
    urls.push(`<url><loc>${SITE.url}/sv${p}</loc><lastmod>${today}</lastmod>${alt(p)}</url>`);
  }
  for (const p of ENGLISH_ONLY) urls.push(`<url><loc>${SITE.url}${p}</loc><lastmod>${today}</lastmod></url>`);
  for (const post of await publishedNews()) {
    urls.push(`<url><loc>${SITE.url}/news/${post.id}/</loc><lastmod>${post.data.date.toISOString().slice(0, 10)}</lastmod></url>`);
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
