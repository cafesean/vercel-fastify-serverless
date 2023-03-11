import * as dotenv from "dotenv";
dotenv.config();

// Require the framework
import Fastify from "fastify";
import { FastifyReply, FastifyRequest } from "fastify";
import { TokenService } from '../functions/service/token';

// Instantiate Fastify with some config
const app = Fastify({
	logger: false,
});

// Register your application as a normal plugin.
app.register(
	async () => {

		app.get("/", async (req: FastifyRequest, res: FastifyReply) => {
			const service = new TokenService();
			console.log("In token.route.ts - hello");
			const hello = await service.hello();

			res.status(200).send({
				result: hello,
			});
		});
	},
	{ prefix: "/token" }
);

export default async (req: any, res: any) => {
	await app.ready();
	app.server.emit("request", req, res);
};
