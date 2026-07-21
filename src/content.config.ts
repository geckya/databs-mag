import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const contributors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/contributors' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['writer', 'editor', 'illustrator', 'interviewer', 'guest']),
    bio: z.string(),
    avatar: z.string().optional(),
    links: z
      .object({
        website: z.string().url().optional(),
        mastodon: z.string().url().optional(),
        bluesky: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        github: z.string().url().optional(),
      })
      .optional(),
  }),
});

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/issues' }),
  schema: z.object({
    number: z.number(),
    season: z.enum(['Q1', 'Q2', 'Q3', 'Q4']),
    year: z.number(),
    theme: z.string(),
    dek: z.string(),
    coverImage: z.string().optional(),
    publishDate: z.coerce.date(),
    status: z.enum(['upcoming', 'published']),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    dek: z.string().optional(),
    authors: z.array(reference('contributors')),
    issue: reference('issues'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    publishDate: z.coerce.date(),
    status: z.enum(['draft', 'in-review', 'scheduled', 'published']),
  }),
});

const interviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/interviews' }),
  schema: z.object({
    subject: reference('contributors').optional(),
    subjectName: z.string(),
    interviewer: reference('contributors'),
    format: z.enum(['print', 'audio', 'video']),
    mediaUrl: z.string().url().optional(),
    issue: reference('issues'),
    publishDate: z.coerce.date(),
    status: z.enum(['draft', 'in-review', 'scheduled', 'published']),
  }),
});

const callsForProposals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/calls-for-proposals' }),
  schema: z.object({
    issue: reference('issues'),
    theme: z.string(),
    deadline: z.coerce.date(),
    guidelinesUrl: z.string().url().optional(),
    status: z.enum(['open', 'closed']),
  }),
});

const bookReviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/book-reviews' }),
  schema: z.object({
    bookTitle: z.string(),
    bookAuthor: z.string(),
    reviewer: reference('contributors'),
    rating: z.number().min(1).max(5).optional(),
    issue: reference('issues').optional(),
    publishDate: z.coerce.date(),
  }),
});

const adviceColumn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/advice-column' }),
  schema: z.object({
    question: z.string(),
    columnist: reference('contributors'),
    issue: reference('issues').optional(),
    publishDate: z.coerce.date(),
  }),
});

export const collections = {
  contributors,
  issues,
  essays,
  interviews,
  'calls-for-proposals': callsForProposals,
  'book-reviews': bookReviews,
  'advice-column': adviceColumn,
};
