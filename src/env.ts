import { z } from "zod";

const envSchema = z.object({
	BACKEND_PORT: z.coerce.number().default(3333),
	FRONTEND_PORT: z.coerce.number().default(5173),
	DB_FILE_NAME: z.string(),
});

export const env = envSchema.parse(process.env);
