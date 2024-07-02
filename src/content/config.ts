import { defineCollection, z } from "astro:content";
import tags from "@/config/tags.json";

const blogCollection = defineCollection({
  schema: {
    isDraft: z.boolean(),
    title: z.string(),
    sortOrder: z.number(),
    tags: z
      .array(z.string())
      .refine((arr) => arr.every((entry) => tags.includes(entry))),
    publishDate: z.date(),
  },
});

const portfolioCollection = defineCollection({});

export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
};
