
const movieResolvers = {
  Query: {
    movies: async (parent, args, context) => {
      const movies = await context.prisma.Movie.findMany()
      return movies
    }
  },
  Mutation: {
    postMovie: (parent, args, context, info) => {
      const newMovie = context.prisma.Movie.create({
        data: {
          title: args.title,
          released: args.released,
          rating: args.rating,
          genre: args.genre,
          description: args.description,
          duration: args.duration,
          poster: args.poster
        }
      })
      return newMovie
    },
    updateMovie: (parent, args, context) => {
      const updateMovie = buildUpdateMovie(args)

      return context.prisma.Movie.update({
        where: {
          id: args.id
        },
        data: updateMovie
      })
    },
    deleteMovie: (parent, args, context) => {
      let result = ''
      try {
        result = context.prisma.Movie.delete({
          where: {
            id: args.id
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