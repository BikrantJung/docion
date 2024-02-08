import { NextRequest, NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const { data, error } = await supabase.auth.getSession()

  const error_description = req.nextUrl.searchParams.get('error_description')

  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    if (!data.session) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  /**
   * Upto here, it is confirmed that there is a session data: User is already logged in
   * but we still need to do some checks
   */
  if (error_description && req.nextUrl.pathname !== '/signup') {
    return NextResponse.redirect(
      new URL(`/signup?error_description=${error_description}`, req.url)
    )
  }
  if (['/login', '/signup'].includes(req.nextUrl.pathname)) {
    if (data.session) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }
}
