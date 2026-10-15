import type { APIRoute } from 'astro';
import { publishedNews } from '../../data/news';
import { SITE } from '../../data/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async () => {
  const posts = await publishedNews();
  const items = posts
    .map((p) => {
      const url = `${SITE.url}/news/${p.id}/`;
      return `<item><title>${esc(p.data.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><description>${esc(p.data.description)}</description></item>`;
    })
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>UX Productions news</title><link>${SITE.url}/news/</link><atom:link href="${SITE.url}/news/rss.xml" rel="self" type="application/rss+xml"/><description>Releases, updates and sales from UX Productions.</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
