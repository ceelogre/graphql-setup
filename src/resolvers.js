import userResolvers from './userResolvers.js'
import movieResolvers from './movieResolvers.js'

// merge the two resolvers
const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...movieResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...movieResolvers.Mutation
  }
}
export default resolvers