import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )
  const { data } = await supabase.auth.getUser()

  const error_description =
    request.nextUrl.searchParams.get('error_description')
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!data.user) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  /**
   * Upto here, it is confirmed that there is a session data: User is already logged in
   * but we still need to do some checks
   */
  if (error_description && request.nextUrl.pathname !== '/signup') {
    return NextResponse.redirect(
      new URL(`/signup?error_description=${error_description}`, request.url)
    )
  }
  if (['/login', '/signup'].includes(request.nextUrl.pathname)) {
    if (data.user) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }
}
