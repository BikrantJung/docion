import * as dotenv from "dotenv"
import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import postgres from "postgres"

import { env } from "@/env.mjs"

import * as schema from "../../../migrations/schema"

dotenv.config({ path: ".env" })

if (!env.DATABASE_URL) {
  throw new Error("🔴 DATABASE_URL Not Found")
}
const client = postgres(env.DATABASE_URL, {
  max: 1,
})
const db = drizzle(client, { schema })
const migrateDb = async () => {
  console.log("🟡 Migrating Client...")
  try {
    await migrate(db, { migrationsFolder: "migrations" })
    console.log("🟢 Successfully Migrated!")
  } catch (error) {
    console.log(error)
    console.log("🔴 Error Migrating Client...")
  }
}
migrateDb()
export default db
