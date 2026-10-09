import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

console.log("turso url", import.meta.env.TURSO_DATABASE_URL);
const client = createClient({
  url: import.meta.env.TURSO_DATABASE_URL!,
  authToken: import.meta.env.TURSO_AUTH_TOKEN!,
});
export const db = drizzle({ client });
