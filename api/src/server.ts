import Fastify from "fastify";
import cors from "@fastify/cors";
import { env } from "./env";

const app = Fastify()
app.register(cors)

app.listen({
  port: env.PORT
}).then(() => {
  console.log('server started!');
})