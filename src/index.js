import { ApolloServer } from 'apollo-server'
import 'dotenv/config'
import prisma from './queries.js'
import typeDefs from './typedefs.js'
import resolvers from './resolvers.js'


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
})

server
  .listen()
  .then(({ url }) => console.info(`running on ${url}`))