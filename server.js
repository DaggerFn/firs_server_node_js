import { createServer } from "node:http";

const server = createServer(() => {
    console.log("Ola")
})

server.listen(3333)