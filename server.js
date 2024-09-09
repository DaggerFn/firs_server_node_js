/*
import { createServer } from 'node:http'

const server = createServer((request, response)=>{
  console.log('Ola')
  response.write("Ola Mundo")
  response.write("oi")
  
  return response.end()
})

server.listen(3333)
*/

import { fastify } from "fastify";

const server = fastify()

server.get('/', () =>{
  return 'Ola mundo'
})

server.get('/ola', () =>{
  return 'Ola mundo'
})


server.listen({
  port: 3333
})

