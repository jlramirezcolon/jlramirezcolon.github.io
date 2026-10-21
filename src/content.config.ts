import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { threads } from './i18n';

const projects = defineCollection({
  // English lives in projects/en, optional Spanish translations in projects/es (same file name).
  loader: glob({ pattern: '{en,es}/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.string().optional(),
      threads: z.array(z.enum(threads)).default([]),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
      // The painting used as the cover. Spanish files can give a translated title.
      art: z.object({ title: z.string(), artist: z.string(), year: z.string().optional() }).optional(),
      // Figures and interactive pieces on the project page. Each is placed where the body has
      // <div data-demo-slot="name"></div> (see src/components/demos).
      // Folder in src/assets/work/ for the 'gallery' piece (captions in src/data/galleries.ts).
      gallery: z.string().optional(),
      demos: z.array(z.enum(['hlg-definition', 'orbital', 'elie-instrument', 'nanogap-diagram', 'nanogap', 'chirality', 'silylation', 'oyster-chart', 'gallery', 'conductance', 'episodes'])).default([]),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      date: z.coerce.date(),
      en: z.string(),
      es: z.string().optional(),
      // Optional media, shown on the News page: a photo, or a video file in src/assets/news/ with a poster image.
      image: image().optional(),
      video: z.string().optional(),
      poster: image().optional(),
      caption: z.object({ en: z.string(), es: z.string().optional() }).optional(),
    }),
});

export const collections = { projects, news };
