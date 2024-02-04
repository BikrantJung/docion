import { Text } from "@/components/ui/text"
import { LoginForm } from "@/components/forms/login-form"
import { TitleSection } from "@/components/landing-page/title-section"

import { LoginCard } from "../_components/login-card"

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <LoginCard />
    </div>
  )
}
export default LoginPage
