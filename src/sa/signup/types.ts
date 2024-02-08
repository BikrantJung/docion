import { ZLoginSchema } from '@/schema/login.schema'
import { Session, User } from '@supabase/supabase-js'

import { ActionState } from '@/lib/create-safe-action'

type Nullable<T> = {
  [K in keyof T]?: T[K] | null
}

type LoginReturnData = Nullable<{
  user: User
  session: Session
}>
export type ReturnType = ActionState<ZLoginSchema, LoginReturnData>
