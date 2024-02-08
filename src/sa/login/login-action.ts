'use server'

import { cookies } from 'next/headers'
import { loginSchema } from '@/schema/login.schema'
import { z } from 'zod'

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
  const response = await supabase.auth.signInWithPassword({ email, password })
  if (response.data.session) {
    return {
      success: true,
      data: response.data,
      message: 'Login success!',
      type: 'success',
      statusCode: 200,
    }
  } else {
    return {
      success: false,
      message: 'Login error!',
      type: 'error',
      statusCode: 400,
      error: response.error?.message || 'Login Error!',
    }
  }
}
export const loginAction = createSafeAction(loginSchema, handler)
