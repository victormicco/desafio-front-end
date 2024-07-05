import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { rootRouter } from "./routes/root";
import { RootService } from "./services/root";

export const app = Fastify();

app.register((app) => rootRouter(app, new RootService()));

// const host = process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost";

// const url = await app.listen({
//   port: 3002,
//   host,
// });
export default async (req: FastifyRequest, res: FastifyReply) => {
  await app.ready();
  app.server.emit("request", req, res);
};

console.log(`Server listening on  🚀`);
