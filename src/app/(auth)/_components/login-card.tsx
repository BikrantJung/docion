import Link from 'next/link'

import { CardWrapper } from '@/components/card/card-wrapper'
import { LoginForm } from '@/components/forms/login-form'

/**
 * A card wrapper for login box
 * @returns JSX.Element
 */
export const LoginCard = () => {
  return (
    <CardWrapper
      Header={
        <div className="text-center text-4xl font-semibold">Welcome Human!</div>
      }
      Content={<LoginForm />}
      showSocialButtons
      Footer={
        <div className="mx-auto flex flex-col items-center text-sm">
          <Link href="/signup" className="hover:underline">
            New user? Register
          </Link>
          {/* <p>or</p>
          <Link href="/verify-email" className="hover:underline">
            Verify your email
          </Link> */}
        </div>
      }
    />
  )
}
