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
  post(name: String): user!,
  update(name: String, name_: String): user!,
  delete(name: String): user!
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
    },
    update: (parent, args, context) => {
      return context.prisma.user.update({
        where: {
          name: args.name
        },
        data: {
          name: args.name_
        }
      })
    },
    delete: (parent, args, context) => {
      let result = ''
      try {
        result = context.prisma.user.delete({
          where: {
          name: args.name
        }
      })
      }
      catch(e) {
        console.error(e)
        result = "There was an error deleting the user"
      }
      finally {
        return result
      }
      
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