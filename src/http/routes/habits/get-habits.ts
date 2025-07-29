import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../../../db/connection.ts";
import { schema } from "../../../db/schema/index.ts";

export const GetHabits: FastifyPluginCallbackZod = async (app) => {
    app.get("/habits", async () => {
        const result = await db.select().from(schema.habit);
        return result;
    });
};
