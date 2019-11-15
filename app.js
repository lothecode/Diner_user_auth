const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/DinerList', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

//  import Diner model
const Diner = require('./models/diner')

//  Routes
//  Home
app.get('/', (req, res) => {
  res.send('list all Diners, home')
})
//  list all
app.get('/diners', (req, res) => {
  res.send('list all Diners')
})
//  list one detail
app.get('/diners/:id', (req, res) => {
  res.send('list one diner detail')
})
//  enter add new one page
app.get('/diners/new', (req, res) => {
  res.send('add new one page')
})
//  do add new one action
app.post('/diners', (req, res) => {
  res.send('add new one action')
})
//  enter edit page
app.get('/diners/:id/edit', (req, res) => {
  res.send('edit one page')
})
//  do edit one action
app.post('/diners/:id/edit', (req, res) => {
  res.send('edit one action')
})
//  do delete one action
app.post('/diners/:id/delete', (req, res) => {
  res.send('delete one diner')
})

app.listen(port, () => {
  console.log('app is running')
})