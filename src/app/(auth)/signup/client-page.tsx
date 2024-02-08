'use client'

import { useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import clsx from 'clsx'

import { PasswordInput } from '@/components/forms/password-input'

import { SignupCard } from '../_components/signup-card'

export const SignupClientPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const codeExchangeError = useMemo(() => {
    if (!searchParams) return ''
    return searchParams.get('error_description')
  }, [searchParams])

  const confirmationAndErrorStyles = useMemo(() => {
    return clsx(
      'bg-primary',
      codeExchangeError &&
        'bg-destructive/10 border-destructive/50 text-destructive'
    )
  }, [codeExchangeError])

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <SignupCard />
    </div>
  )
}
