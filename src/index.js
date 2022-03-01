import { ApolloServer } from 'apollo-server'

const User = [{
  id: 34903,
  name: 'GG magree'
}
]
const typeDefs = `
type Query {
  info: String!,
  users: [User!]!,
  user(id: ID!): User
}
type User {
  id: ID!,
  name: String!
}
`

const resolvers = {
  Query: {
    info: () => 'this is an API. 646',
    users: () => User
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({ url }) => console.info(`running on ${url}`))