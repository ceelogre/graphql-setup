
const movieResolvers = {
  Query: {
    movies: async (parent: any, args: any, context: { prisma: { Movie: { findMany: () => any } } }) => {
      const movies = await context.prisma.Movie.findMany()
      return movies
    },
    movie: async(parent: any, args: any, context: any) => {
      return context.prisma.Movie.findUnique({
        where: {
          id: args.id
        }
      })
    }
  },
  Mutation: {
    postMovie: (parent: any, args: any, context: any) => {
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
    updateMovie: (parent: any, args: any, context: any) => {
      const updateMovie = buildUpdateMovie(args)

      return context.prisma.Movie.update({
        where: {
          id: args.id
        },
        data: updateMovie
      })
    },
    deleteMovie: (parent: any, args: any, context: any) => {
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
const buildUpdateMovie = (args: any) => {
  let updateMovie: any = {}
  for (let key in args) {
    if (key != 'id') {
      updateMovie[key] = args[key]
    }
  }
  return updateMovie
}
export default movieResolvers