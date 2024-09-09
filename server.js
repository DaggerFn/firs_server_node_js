import { log } from 'node:console'
import { createServer } from 'node:http'

const server = createServer((request, response)=>{
  console.log('Ola')
  response.write("Ola Mundo")
  
  return response.end()
})

server.listen(3333)