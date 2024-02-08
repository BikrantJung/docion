'use server'

import { cookies } from 'next/headers'
import {
  verifyEmailSchema,
  ZVerifyEmailSchema,
} from '@/schema/verify-email.schema'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

import { env } from '@/env.mjs'
import { createSafeAction } from '@/lib/create-safe-action'

import { ReturnType } from './types'

async function handler(values: ZVerifyEmailSchema): Promise<ReturnType> {
  const validatedSchema = verifyEmailSchema.safeParse(values)
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
    data: { email },
  } = validatedSchema
  const supabase = createRouteHandlerClient({ cookies })
  const response = await supabase.auth.resend({
    type: 'signup',
    email,
    options: {
      emailRedirectTo: `${env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
    },
  })
  console.log(`🚀 verify-email-action.ts:37 ~ Data: ~`, response)
  if (response.data.messageId) {
    console.log('SUCCESS', response.data.messageId)
    return {
      success: true,
      message: 'A confirmation link has been sent to your email.',
      type: 'success',
      statusCode: 200,
    }
  } else {
    console.log(
      `🚀 verify-email-action.ts:46 ~ Error ~`,
      response.error?.message
    )
    return {
      success: false,
      message: 'Error sending confirmation link!',
      type: 'error',
      statusCode: 400,
      error: response.error?.message || 'Error sending confirmation link!',
    }
  }
}
export const verifyEmailAction = createSafeAction(verifyEmailSchema, handler)
