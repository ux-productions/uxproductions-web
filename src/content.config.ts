import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      /** A post stays hidden until this moment; the daily build publishes it. */
      date: z.coerce.date(),
      game: z.enum(['the-perfect-robot', 'the-perfect-murder', 'the-perfect-race', 'the-perfect-part']).optional(),
      image: image(),
      imageAlt: z.string(),
      og: z.string().optional(),
    }),
});

export const collections = { news };
