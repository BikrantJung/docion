import { z } from "zod"

export type FieldErrors<T> = {
  [K in keyof T]?: string[]
}

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>
  error?: string | null
  data?: TOutput
  statusCode?: number
  success?: boolean
  type?: "error" | "warn" | "info" | "success"
  message?: string
}

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data)
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
        statusCode: 400,
        success: false,
        type: "error",
      }
    }

    return handler(validationResult.data)
  }
}
