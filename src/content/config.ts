import { defineCollection, z } from 'astro:content';

const fundamentals = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
  }),
});

const patterns = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([]),
    problem: z.string(),
    recommendation: z.string(),
    uxImpact: z.string(),
    securityImpact: z.string(),
    implementationNotes: z.string(),
  }),
});

const benchmarks = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    order: z.number(),
    whatTheyDoWell: z.string(),
    whyItWorks: z.string(),
    whatToLearn: z.string(),
    uxPattern: z.string(),
    scores: z.object({
      frictionReduction: z.number().min(0).max(5),
      trustSignaling: z.number().min(0).max(5),
      recoveryResilience: z.number().min(0).max(5),
    }),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    org: z.string(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

const decisions = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    status: z.enum(['Proposed', 'Accepted', 'Rejected', 'Superseded']),
    recommendation: z.string(),
    context: z.string(),
    options: z.array(z.object({ name: z.string(), description: z.string() })),
    rationale: z.string(),
    risks: z.array(z.string()),
    order: z.number(),
  }),
});

const roadmap = defineCollection({
  type: 'data',
  schema: z.object({
    now: z.array(z.string()),
    next: z.array(z.string()),
    later: z.array(z.string()),
  }),
});

export const collections = {
  fundamentals,
  patterns,
  benchmarks,
  'case-studies': caseStudies,
  decisions,
  roadmap,
};
