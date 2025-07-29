import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../../../db/connection.ts";
import { schema } from "../../../db/schema/index.ts";

export const getHabits: FastifyPluginCallbackZod = async (app) => {
	app.get("/habits", async (request, reply) => {
		try {
			const result = await db.select().from(schema.habit);
			return result;
		} catch (error) {
			app.log.error(error);
			return reply.status(500).send({
				success: false,
				error: "Failed to create habit",
			});
		}
	});
};
