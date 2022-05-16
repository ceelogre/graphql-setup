
const movieResolvers = {
  Query: {
    info: () => 'this is a movie API. 646',
    movies: async (parent, args, context) => {
      if (process.env.NODE_ENV == 'development') {
        const movies = await context.prisma.Movie.findMany()
        return movies
      } else {
        return getUsers()
      }
    }
  },
  Mutation: {
    post: (parent, args, context, info) => {
      if (process.env.NODE_ENV == 'development') {
        const newMovie = context.prisma.Movie.create({
          data: {
            title: args.title,
            released: args.released,
            rating: args.rating,
            genre: args.genre,
            description: args.description,
            duration: args.duration
          }
        })
        console.info('En')
        return newMovie
      } else {
        console.info('Hr')
        return {error: "Env"}
      }
    },
    update: (parent, args, context) => {
      if (process.env.NODE_ENV == 'development') {

        return context.prisma.user.update({
          where: {
            name: args.name
          },
          data: {
            name: args.name_
          }
        })
    } else {
      return updateMovie(args.name, args.name_)
    }
    },
    delete: (parent, args, context) => {
      let result = ''
      if (process.env.NODE_ENV == 'development') {

        try {
          result = context.prisma.Movie.delete({
            where: {
              name: args.name
            }
          })
        }
        catch (e) {
          console.error(e)
          result = "There was an error deleting the user"
        }
        finally {
          return result
        }
      } else {
        return deleteUser(args.name)
      }

    }
  }
}

export default movieResolvers