import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: `http://localhost:${env.FRONTEND_PORT}`,
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", (req, res) => {
	return "OK";
});

app.listen({ port: env.BACKEND_PORT }).then(() => {
	console.log(`HTTP server is running on port ${env.BACKEND_PORT}`);
});
