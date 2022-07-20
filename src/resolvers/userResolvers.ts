const userResolvers = {
  Query: {
    users: async (parent: any, args: any, context: any) => {
      return context.prisma.user.findMany()
    },
    user: async(parent: any, args: any, context: any) => {
      return context.prisma.user.findUnique({
        where: {
          id: args.id
        }
      })
    }
  },
  Mutation: {
    postUser: (parent: any, args: any, context: any) => {
      const newUser = context.prisma.user.create({
        data: {
          name: args.name
        }
      })
      return newUser
    },
    updateUser: (parent: any, args: any, context: any) => {
      return context.prisma.user.update({
        where: {
          name: args.name
        },
        data: {
          name: args.name_
        }
      })
    },
    deleteUser: (parent: any, args: any, context: any) => {
      let result = ''
      try {
        result = context.prisma.user.delete({
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
    }
  }
}

export default userResolvers