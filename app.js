const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/diner', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

//  import Diner model
const Diner = require('./models/diner')

app.get('/', (req, res) => {
  res.send('Diner List CRUD')
})

app.listen(port, () => {
  console.log('app is running')
})