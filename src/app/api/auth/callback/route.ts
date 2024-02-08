import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

/**
 *
 * A route handler function to exchange session data for a token
 * This api url is generally accessed from a confirmation link sent after successful signup.
 */
export async function GET(req: NextRequest) {
  const reqUrl = new URL(req.url)
  const code = reqUrl.searchParams.get('code')
  if (code) {
    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
  }
  return NextResponse.redirect(`${reqUrl.origin}/dashboard`)
}
