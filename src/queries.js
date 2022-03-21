import pkg from '@prisma/client'

const { PrismaClient} = pkg
const prisma = new PrismaClient()

async function main () {
  await prisma.$connect()
  const users = await getUsers()
  console.info(users)
}

main()
.catch(error => {
  throw error
})
.finally(async () => {
  await prisma.$disconnect()
})

const getUsers = async () => {
  return await prisma.user.findMany()
}
export default prisma