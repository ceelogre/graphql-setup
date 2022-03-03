import { ApolloServer } from 'apollo-server'

const Users = [{
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

type Mutation {
  post(id: String!,  name: String!): User!
}
`

const resolvers = {
  Query: {
    info: () => 'this is an API. 646',
    users: () => Users
  },
  Mutation: {
    post: (parent, args) => {
      const User = {
        id: args.id,
        name: args.name
      }
      Users.push(User)
      return User
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({ url }) => console.info(`running on ${url}`))