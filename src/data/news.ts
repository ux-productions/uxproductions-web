import { getCollection } from 'astro:content';

/** Published posts, newest first. Posts dated in the future wait for a later build. */
export async function publishedNews(game?: string) {
  const now = new Date();
  const posts = await getCollection('news', (p) => p.data.date <= now && (!game || p.data.game === game));
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
