import { getCollection } from 'astro:content';
import { NEWS_FRESH_DAYS } from './site';

/** Published posts, newest first. Posts dated in the future wait for a later build. */
export async function publishedNews(game?: string) {
  const now = new Date();
  const posts = await getCollection('news', (p) => p.data.date <= now && (!game || p.data.game === game));
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Posts young enough for the front page; empty when nothing was posted lately. */
export async function freshNews(limit = 3) {
  const cutoff = Date.now() - NEWS_FRESH_DAYS * 86_400_000;
  return (await publishedNews()).filter((p) => p.data.date.getTime() >= cutoff).slice(0, limit);
}
