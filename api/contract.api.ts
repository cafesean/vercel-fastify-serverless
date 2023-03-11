import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import Fastify from "fastify";
import fastifyFormbody from "@fastify/formbody";

// Instantiate Fastify with some config
const app = Fastify({
	logger: false,
});


const directory = process.cwd();

console.log("contract.api.ts current directory: ", directory);

// Register your application as a normal plugin.
app
.register(fastifyFormbody)
.register(import("../src/functions/contract.route"), {
	prefix: "/contract",
});

export default async (req: any, res: any) => {
	await app.ready();
	app.server.emit("request", req, res);
};
