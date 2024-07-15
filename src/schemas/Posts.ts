import { z } from 'zod';

export const Posts = z.object({
  documents: z.array(
    z.object({
      createTime: z.string(),
      fields: z.object({
        title: z.object({ stringValue: z.string() }),
        views: z.object({ integerValue: z.string() }),
      }),
      name: z.string(),
      updateTime: z.string(),
    }),
  ),
});

export type IPosts = z.infer<typeof Posts>;
