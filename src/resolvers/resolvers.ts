import userResolvers from './userResolvers'
import movieResolvers from './movieResolvers'

// merge the two resolvers
const resolvers = {
  Query: {
    hello: () => 'Hellooo! This is an EC2 server instance (Welcome to AWS), now get to work! (btw, you\'re not welcome to the world)',
    ...userResolvers.Query,
    ...movieResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...movieResolvers.Mutation
  }
}
export default resolvers