import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Bell & Sons'),
        image: image(),
        category: z.enum(['tendencias', 'comparativas', 'mantenimiento', 'guias', 'calculos']),
        tags: z.array(z.string()).optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    'blog': blogCollection,
};
