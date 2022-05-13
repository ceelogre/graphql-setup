import pkg from '@prisma/client'

const { PrismaClient} = pkg
const prisma = new PrismaClient()

async function main () {
  await prisma.$connect()
  const movies = await getMovies()
  movies.length == 0 ? console.info('No movies available'): console.info(movies)
}

main()
.catch(error => {
  console.error('Error running main prisma fx', error)
})
.finally(async () => {
  await prisma.$disconnect()
})

const getMovies = async () => {
  return await prisma.Movie.findMany()
}
export default prisma