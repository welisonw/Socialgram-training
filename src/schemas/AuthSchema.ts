import { z } from 'zod';

export const LoginAuthSchema = z.object({
  email: z
    .string({ required_error: 'Email obrigatório' })
    .email({ message: 'Email inválido' }),
  password: z.string({
    required_error: 'Senha obrigatória',
  }),
});

export const LoginAuthMutationStateSchema = z
  .object({
    displayName: z.string(),
    email: z.string(),
    expiresIn: z.string(),
    idToken: z.string(),
    kind: z.string(),
    localId: z.string(),
    refreshToken: z.string(),
    registered: z.boolean(),
  })
  .optional();

export type ILoginAuth = z.infer<typeof LoginAuthSchema>;
export type ILoginAuthMutationState = z.infer<
  typeof LoginAuthMutationStateSchema
>;
