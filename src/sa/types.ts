export type ServerActionReturnType<TInput> = {
  success: boolean
  message: string
  type: "success" | "error" | "warning" | "info"
  statusCode: number
  data?: any
  error?: {
    message: string
    name: string
    status?: number
    cause?: unknown
    stack?: string
  } | null
  fieldErrors?: FieldErrors<TInput> | null
}
export type FieldErrors<T> = {
  [K in keyof T]?: string[]
}
