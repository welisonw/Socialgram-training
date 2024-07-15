import { z } from 'zod';

const EnvSchema = z.object({
  EXPO_PUBLIC_API_KEY: z.coerce.string(),
  EXPO_PUBLIC_PROJECT_ID: z.coerce.string(),
});

export const env = EnvSchema.parse(process.env);
