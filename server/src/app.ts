import getQuestion from "./routes/getQuestion";
import submitAnswer from "./routes/submitAnswer";
import fastify from "fastify";
const server=fastify()


server.get('/ping', async (request, reply) => {
  return 'pong\n'
})
server.register(getQuestion)
server.register(submitAnswer)

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})