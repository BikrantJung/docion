import { ZVerifyEmailSchema } from '@/schema/verify-email.schema'

import { ActionState } from '@/lib/create-safe-action'

export type ReturnType = ActionState<ZVerifyEmailSchema, null>
