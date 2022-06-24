const user =`
type Query {
  users: [user]!
}
type Query {
  user(id: ID!): user
}
type user {
   id: String!
  ,name: String!
}
type Mutation {
  postUser(name: String!): user!  # create a new user
  updateUser(name: String!, name_: String!): user!  # update an existing user
  deleteUser(name: String!): user!  # delete an existing user
}
`

export default user