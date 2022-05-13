import { ApolloServer } from 'apollo-server'
import 'dotenv/config'
import prisma from './queries.js'
import typeDefs from './typedefs.js'
import userResolvers from './userResolvers.js'
import movieResolvers from './movieResolvers.js'


const server = new ApolloServer({
  typeDefs,
  userResolvers,
  movieResolvers,
  context: {
    prisma
  }
})

server
  .listen()
  .then(({ url }) => console.info(`running on ${url}`))