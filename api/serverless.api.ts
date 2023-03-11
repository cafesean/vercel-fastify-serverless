import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import Fastify from "fastify";

// Instantiate Fastify with some config
const app = Fastify({
	logger: false,
});


const directory = process.cwd();

console.log("serverless.api.ts current directory: ", directory);

// Register your application as a normal plugin.
app.register(import("../src/functions/index.route"), {
	prefix: "/",
});

export default async (req: any, res: any) => {
	await app.ready();
	app.server.emit("request", req, res);
};
