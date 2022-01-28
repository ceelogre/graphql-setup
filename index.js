import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import pkg from 'graphql'
const { buildSchema } = pkg
const app = express()

let schema = buildSchema(`
type Query {
  hello: String
}
`)

let root = {
  hello: () => 'I cry'
}

app.get('/', (req,res) => {
  res.json({
    title: 'Tired',
    author: 'Sarah X'
  })
})

app.use('/graph', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(3001, () => {
  console.info('3001')
})