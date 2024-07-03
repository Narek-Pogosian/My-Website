import { defineCollection, z } from "astro:content";
import tags from "@/config/tags.json";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string().max(50),
    description: z.string().max(200),
    sortOrder: z.number(),
    tags: z
      .array(z.string())
      .refine((arr) => arr.every((entry) => tags.includes(entry))),
    publishDate: z.date(),
  }),
});

const portfolioCollection = defineCollection({});

export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
};
