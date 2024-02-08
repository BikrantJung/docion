import Link from 'next/link'

import { CardWrapper } from '@/components/card/card-wrapper'
import { SignupForm } from '@/components/forms/signup-form'

/**
 * A card wrapper for signin box
 * @returns JSX.Element
 */
export const SignupCard = () => {
  return (
    <CardWrapper
      Header={
        <div className="text-center text-4xl font-semibold">Welcome Back!</div>
      }
      Content={<SignupForm />}
      showSocialButtons
      Footer={
        <div className="mx-auto text-sm">
          <Link href="/auth/register">New user? Register</Link>
        </div>
      }
    />
  )
}
