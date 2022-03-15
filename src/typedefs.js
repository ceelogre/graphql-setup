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

export default typeDefs