import pkg from '@prisma/client'

const { PrismaClient} = pkg
const prisma = new PrismaClient()

async function main () {
  await prisma.$connect()
  const users = await getMovies()
  console.info(users)
}

main()
.catch(error => {
  throw error
})
.finally(async () => {
  await prisma.$disconnect()
})

const getMovies = async () => {
  return await prisma.Movie.findMany()
}
export default prisma