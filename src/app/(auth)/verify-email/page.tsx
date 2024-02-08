import { redirect } from 'next/navigation'

import { VerifyEmailCard } from '../_components/verify-email-card'

const VerifyEmailPage = () => {
  redirect('/')
  return (
    <div>
      <VerifyEmailCard />
    </div>
  )
}

export default VerifyEmailPage
