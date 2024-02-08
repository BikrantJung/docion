import * as z from 'zod'

export const verifyEmailSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
})
export type ZVerifyEmailSchema = z.infer<typeof verifyEmailSchema>
