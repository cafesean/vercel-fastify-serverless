import { FastifyInstance, FastifyReply, FastifyRequest, FastifyServerOptions } from "fastify";
// import { ContractService } from "./service";

// interface IQueryString {
// 	name: string;
// }

// interface IParams {
// 	first: string;
// }

// interface CustomRouteGenericParam {
// 	Params: IParams;
// }

// interface CustomRouteGenericQuery {
// 	Querystring: IQueryString;
// }

export default async function (fastify: FastifyInstance, opts: FastifyServerOptions, done: any) {
	fastify.register(
		async () => {

			fastify.get("/", async (req: FastifyRequest, res: FastifyReply) => {
				console.log("In index.route.ts")
				res.status(200).send({
					hello: "World1111",
				});
			});

			done();
		},
		{
			prefix: "/",
		}
	);

	done();
}
