import { ApolloServer } from 'apollo-server'
import 'dotenv/config'
import prisma from './queries.js'
import typeDefs from './typedefs.js'
import resolvers from './resolvers.js'

import express from 'express'
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
})

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to your EC2 instance'
  })
})
const port = process.env.NODE_ENV === 'production' ? process.env.PORT : 4000
app
  .listen(
   port 
  , () => console.info(`On port ${port} `))