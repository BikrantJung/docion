'use server'

import { cookies } from 'next/headers'
import { loginSchema } from '@/schema/login.schema'
import { signupSchema } from '@/schema/signup.schema'
import { z } from 'zod'

import { env } from '@/env.mjs'
import { createSafeAction } from '@/lib/create-safe-action'
import { createClient } from '@/lib/supabase/server'

import { ReturnType } from './types'

type ZodLoginSchema = z.infer<typeof loginSchema>
async function handler(values: ZodLoginSchema): Promise<ReturnType> {
  const validatedSchema = loginSchema.safeParse(values)
  if (!validatedSchema.success) {
    return {
      success: false,
      message: 'Bad request',
      statusCode: 400,
      type: 'error',
      fieldErrors: validatedSchema.error.flatten().fieldErrors,
    }
  }
  const {
    data: { email, password },
  } = validatedSchema
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)
  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
    },
  })
  console.log(response.data)
  if (response.data.user) {
    return {
      success: true,
      data: response.data,
      message: 'A confirmation link has been sent to your email.',
      type: 'success',
      statusCode: 200,
    }
  } else {
    return {
      success: false,
      message: 'Signup error!',
      type: 'error',
      statusCode: 400,
      error: response.error?.message || 'Signup Error!',
    }
  }
}
export const signupAction = createSafeAction(signupSchema, handler)
