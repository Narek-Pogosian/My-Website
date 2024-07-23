import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(50),
    description: z.string().max(200),
    priority: z.number().min(0).max(10),
    projectSettings: z
      .object({
        github: z.string(),
        website: z.string().optional(),
        techStack: z.array(z.string()),
      })
      .optional(),
  }),
});

export const collections = {
  portfolio,
};
