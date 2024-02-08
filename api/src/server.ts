import 'dotenv/config'
import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify()
app.register(cors)

app.listen({
  port: Number(process.env.NODE_PORT)
}).then(() => {
  console.log('server started!');
})