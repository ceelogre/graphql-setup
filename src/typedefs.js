const typeDefs = `
type Query {
  info: String!,
  users: [user]!,
  movies: [Movie]
}
type user {
   id: String!
  ,name: String!
}

type Movie {
  id: String!,
  title: String!,
  released: String!,
  rating: Int,
  genre: [String],
  description: String,
  duration: Int
}
type Mutation {
  post(title: String, released: String, rating: Int, genre: [String], description: String, duration: Int): Movie,
  update(name: String, name_: String): user!,
  delete(name: String): user!
}
`

export default typeDefs