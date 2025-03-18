import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '!README.md', '!node_modules'],
    base: 'src/content/blog',
  }),
  schema: z.object({
    path: z.string(),
    title: z.string(),
    description: z.string().optional(),
    date: z.string().transform((str) => new Date(Date.parse(str))),
    category: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
