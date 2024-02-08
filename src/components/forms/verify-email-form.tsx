'use client'

import { Dispatch, SetStateAction } from 'react'
import { verifyEmailAction } from '@/sa/verify-email/verify-email-action'
import {
  verifyEmailSchema,
  ZVerifyEmailSchema,
} from '@/schema/verify-email.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useAction } from '@/hooks/use-action'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface SignupFormProps {
  setHideUI: Dispatch<SetStateAction<boolean>>
}
export const SendEmailVerificationLinkForm = ({
  setHideUI,
}: SignupFormProps) => {
  const { execute, isLoading } = useAction(verifyEmailAction, {
    onError(error) {
      setHideUI(false)
      toast.error(error)
    },
    onSuccess(_, message) {
      setHideUI(true)
      toast.success(message)
    },
  })
  //   const [actionResponse, setActionResponse] = useState<LoginActionReturnType>()

  const form = useForm<ZVerifyEmailSchema>({
    resolver: zodResolver(verifyEmailSchema),
    defaultValues: {
      email: '',
    },
  })
  const onSubmit: SubmitHandler<ZVerifyEmailSchema> = async (formData) => {
    execute(formData)
    // router.replace('/dashboard')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 w-full space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="email@example.com"
                    type="email"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            isLoading={isLoading}
            className="mx-auto w-full"
            type="submit"
          >
            Send Link
          </Button>
        </div>
      </form>
    </Form>
  )
}
