import userResolvers from './userResolvers.js'
import movieResolvers from './movieResolvers.js'

// merge the two resolvers
const resolvers = {
  Query: {
    hello: () => 'Hellooo! This is an EC2 server instance (Welcome to AWS), now get to work!',
    ...userResolvers.Query,
    ...movieResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...movieResolvers.Mutation
  }
}
export default resolvers