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

const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 4000
server
  .listen(
   port 
  , () => console.info(`On port ${port} `))