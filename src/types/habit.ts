import * as z from "zod";

export const habitTypesEnum = ["habit", "task"] as const;

export const habitType = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	type: z.enum(habitTypesEnum),
	isArchived: z.boolean(),
});

export type Habit = z.infer<typeof habitType>;
