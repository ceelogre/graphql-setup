import { ApolloServer } from 'apollo-server'
import prisma from './queries.js'

const typeDefs = `
type Query {
  info: String!,
  users: [user]!
}
type user {
   id: String!
  ,name: String!
}
type Mutation {
  post(name: String): user!
}
`

const resolvers = {
  Query: {
    info: () => 'this is an API. 646',
    users: async (parent, args, context) => {
      return context.prisma.user.findMany()
    }
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const newUser = context.prisma.user.create({
        data: {
         name: args.name 
        }
      })
      return newUser
    }
  }
}

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