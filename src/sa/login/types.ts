import { ZLoginSchema } from "@/schema/login.schema"
import { Session, User, WeakPassword } from "@supabase/supabase-js"
import { z } from "zod"

import { ActionState } from "@/lib/create-safe-action"

type Nullable<T> = {
  [K in keyof T]?: T[K] | null
}

type LoginReturnData = Nullable<{
  user: User
  session: Session
  weakPassword?: WeakPassword | undefined
}>
export type ReturnType = ActionState<ZLoginSchema, LoginReturnData>
