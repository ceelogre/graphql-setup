import { ApolloServer } from 'apollo-server'

const typeDefs = `
type Query {
  info: String!
}
`

const resolvers = {
  Query: {
    info: () => 'this is an API. 646'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({ url }) => console.info(`running on ${url}`))