import { z } from 'zod';

const PostSchema = z.object({
  body: z.object({ stringValue: z.string() }),
  title: z.object({ stringValue: z.string() }),
});

export const PostsSchema = z.object({
  documents: z.array(
    z.object({
      createTime: z.string(),
      fields: PostSchema,
      name: z.string(),
      updateTime: z.string(),
    }),
  ),
  nextPageToken: z.string().optional(),
});

export type IPost = z.infer<typeof PostSchema>;
export type IPosts = z.infer<typeof PostsSchema>;
