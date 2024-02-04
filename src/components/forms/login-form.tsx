"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { loginAction } from "@/sa/login/login-action"
// import { login, LoginActionReturnType } from "@/actions/login"
import { loginSchema, ZLoginSchema } from "@/schema/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

import { FieldErrors } from "@/lib/create-safe-action"
import { useAction } from "@/hooks/use-action"
import { Button } from "@/components/ui/button"
import { Callout } from "@/components/ui/callout"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const LoginForm = () => {
  const router = useRouter()

  const [isPending, startTransition] = useTransition()
  const { execute, fieldErrors, error } = useAction(loginAction)
  //   const [actionResponse, setActionResponse] = useState<LoginActionReturnType>()

  const form = useForm<ZLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const onSubmit: SubmitHandler<ZLoginSchema> = async (formData) => {
    execute(formData)
    if (fieldErrors || error) {
      form.reset()
    }
    router.replace("/dashboard")
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
                    disabled={isPending}
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
          <FormField
            control={form.control}
            name="password"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* {actionResponse && (
            <Callout
              content={<p>{actionResponse.message}</p>}
              variant={actionResponse.type}
            />
          )} */}
          <Button
            // isLoading={isPending}
            className="mx-auto w-full"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </Form>
  )
}
