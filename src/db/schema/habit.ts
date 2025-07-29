import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const habit = sqliteTable("habit", {
    id: text().primaryKey(),
    name: text({ length: 255 }).notNull(),
    description: text({ length: 1000 }),
    createdAt: integer({ mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`),
    updatedAt: integer({ mode: "timestamp" })
        .notNull()
        .default(sql`(unixepoch())`),
    type: text({ enum: ["habit", "task"] }),
    isArchived: integer({ mode: "boolean" }),
});
