import { createUser, deleteUser, getUsers, updateUser} from './db.js'

const userResolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (process.env.NODE_ENV == 'development') {
        return context.prisma.user.findMany()
      } else {
        return getUsers()
      }
    }
  },
  Mutation: {
    postUser: (parent, args, context, info) => {
      if (process.env.NODE_ENV == 'development') {
        const newUser = context.prisma.user.create({
          data: {
            name: args.name
          }
        })
        return newUser
      } else {
        return createUser(args.name)
      }
    },
    updateUser: (parent, args, context) => {
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
      return updateUser(args.name, args.name_)
    }
    },
    deleteUser: (parent, args, context) => {
      let result = ''
      if (process.env.NODE_ENV == 'development') {

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
      } else {
        return deleteUser(args.name)
      }

    }
  }
}

export default userResolvers