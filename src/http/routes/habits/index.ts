// Barrel file

import type { FastifyInstance } from "fastify";
import { addHabit } from "./add-habit.ts";
import { getHabits } from "./get-habits.ts";

export async function registerRoutes(app: FastifyInstance) {
	await app.register(addHabit);
	await app.register(getHabits);
}
