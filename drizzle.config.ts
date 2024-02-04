import * as dotenv from "dotenv"
import type { Config } from "drizzle-kit"

import { env } from "@/env.mjs"

dotenv.config({
  path: ".env",
})

if (!env.DATABASE_URL) {
  throw new Error("🔴️ DATABASE_URL Not Found")
}
export default {
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config
