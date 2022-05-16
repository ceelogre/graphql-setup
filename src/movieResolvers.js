
const movieResolvers = {
  Query: {
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
    postMovie: (parent, args, context, info) => {
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
        return newMovie
      } else {
        return {error: "Env"}
      }
    },
    updateMovie: (parent, args, context) => {
      if (process.env.NODE_ENV == 'development') {
        const updateMovie = buildUpdateMovie(args)

        return context.prisma.Movie.update({
          where: {
            id: args.id
          },
          data: updateMovie
        })
    } else {
      return updateMovie(args.name, args.name_)
    }
    },
    deleteMovie: (parent, args, context) => {
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
const buildUpdateMovie = (args) => {
  let updateMovie = {}
  for (let key in args) {
    if (key != 'id') {
      updateMovie[key] = args[key]
    }
  }
  return updateMovie
}
export default movieResolvers