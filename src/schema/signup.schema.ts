import * as z from 'zod'

export const signupSchema = z
  .object({
    email: z.string().email({
      message: 'Email is required',
    }),
    password: z
      .string()
      .min(8, {
        message: 'Minimum 8 characters required',
      })
      .max(30, {
        message: 'Maximum 30 characters allowed',
      }),
    confirmPassword: z
      .string()
      .min(8, {
        message: 'Minimum 8 characters required',
      })
      .max(30, {
        message: 'Maximum 30 characters allowed',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
export type ZSignupSchema = z.infer<typeof signupSchema>
