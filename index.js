import express from 'express'
const app = express()

app.get('/', (req,res) => {
  res.json({
    title: 'Tired',
    author: 'Sarah X'
  })
})

app.listen(3001, () => {
  console.info('3001')
})