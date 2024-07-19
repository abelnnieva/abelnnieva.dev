// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const logos = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    image: z.object({
      png: z
        .object({
          light: z.string(),
          dark: z.string().optional(),
        })
        .optional(),
      svg: z
        .object({
          light: z.object({
            fill: z.string().optional(),
            viewBox: z.string(),
            graphic: z.string(),
          }),
          dark: z
            .object({
              fill: z.string().optional(),
              viewBox: z.string(),
              graphic: z.string(),
            })
            .optional(),
        })
        .optional(),
    }),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: reference("logos"),
    techStack: z.array(reference("logos")),
    livePreview: z.object({
      isActive: z.boolean(),
      link: z.object({
        href: z.string().url(),
        text: z.string(),
      }),
    }),
    isArchived: z.boolean(),
  }),
});

const topics = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    logo: reference("logos"),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    publishDate: z.date(),
    title: z.string(),
    description: z.string(),
    topic: reference("topics"),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  logos: logos,
  projects: projects,
  topics: topics,
  notes: notes,
};
