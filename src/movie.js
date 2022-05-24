const def = `
type Query {
  hello: String
}`
const movie = `
type Query {
  movies: [Movie]
}
type Movie {
  id: String!,
  title: String!,
  released: String!,
  rating: Int,
  genre: [String],
  description: String,
  duration: Int,
  poster: String
}
type Mutation {
  postMovie(title: String, released: String, rating: Int, genre: [String], description: String, duration: Int, poster: String): Movie,
  updateMovie(id: String, title: String, released: String, rating: Int, genre: [String], description: String, duration: Int, poster: String): Movie,
  deleteMovie(id: String): Movie
}
`

export {def, movie}