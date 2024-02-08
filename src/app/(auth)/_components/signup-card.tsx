'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CardWrapper } from '@/components/card/card-wrapper'
import { SignupForm } from '@/components/forms/signup-form'
import { Icons } from '@/components/icons'

/**
 * A card wrapper for signin box
 * @returns JSX.Element
 */
export const SignupCard = () => {
  const [hideUI, setHideUI] = useState(false)
  const ConfirmEmailBox = () => {
    return (
      <div className="mb-4 w-full space-y-4">
        <Alert variant="success">
          <Icons.flame className="h-4 w-4 stroke-success" />
          <AlertTitle>Confirm your email!</AlertTitle>
          <AlertDescription>
            A confirmation link has been sent to your email.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <CardWrapper
      Header={
        <div className="text-center text-4xl font-semibold">Welcome Back!</div>
      }
      Content={
        hideUI ? <ConfirmEmailBox /> : <SignupForm setHideUI={setHideUI} />
      }
      showSocialButtons={!hideUI}
      Footer={
        <div className="mx-auto text-sm">
          <Link href="/login" className="hover:underline">
            Already registered? Login
          </Link>
        </div>
      }
    />
  )
}
