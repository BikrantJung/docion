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
        <div className="mx-auto text-sm">
          <Link href="/signup" className="hover:underline">
            New user? Register
          </Link>{' '}
        </div>
      }
    />
  )
}
