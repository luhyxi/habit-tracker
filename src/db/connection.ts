import { drizzle } from "drizzle-orm/libsql";
import { env } from "../env.ts";
import { schema } from "./schema/index.ts";

export const db = drizzle(env.DB_FILE_NAME, {
	schema,
	casing: "camelCase",
});
