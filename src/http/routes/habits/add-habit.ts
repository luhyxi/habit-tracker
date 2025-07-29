import { randomUUID } from "node:crypto";
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { db } from "../../../db/connection.ts";
import { habit } from "../../../db/schema/habit.ts";
import { habitTypesEnum } from "../../../types/habit.ts";

const addHabitSchema = z.object({
	name: z.string().min(1).max(255),
	description: z.string().max(1000).optional(),
	type: z.enum(habitTypesEnum).optional(),
	isArchived: z.boolean().optional().default(false),
});

export const addHabit: FastifyPluginCallbackZod = async (app) => {
	app.post(
		"/habits",
		{
			schema: {
				body: addHabitSchema,
			},
		},
		async (request, reply) => {
			try {
				const { name, description, type, isArchived } = request.body;

				const newHabit = {
					id: randomUUID(),
					name,
					description: description || null,
					type: type || null,
					isArchived,
				};

				const result = await db.insert(habit).values(newHabit).returning();

				return reply.status(201).send({
					success: true,
					data: result[0],
				});
			} catch (error) {
				app.log.error(error);
				return reply.status(500).send({
					success: false,
					error: "Failed to create habit",
				});
			}
		},
	);
};
