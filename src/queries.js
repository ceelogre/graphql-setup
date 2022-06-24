import pkg from '@prisma/client'

const { PrismaClient} = pkg
const prisma = new PrismaClient()

async function main () {
  await prisma.$connect()
}

main()
.catch(error => {
  console.error('Error running main prisma fx', error)
})
.finally(async () => {
  await prisma.$disconnect()
})

export default prisma