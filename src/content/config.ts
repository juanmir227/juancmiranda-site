import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string().optional(),
    draft: z.boolean().optional(), // ⬅️ NECESARIO
  }),
});

export const collections = { posts };
