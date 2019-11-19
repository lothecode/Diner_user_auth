const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(methodOverride('_method'))

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
  Diner.find((err, diners) => {
    if (err) return console.error(err)
    return res.render('index', { diners: diners })
  })
})
//  list all
app.get('/diners', (req, res) => {
  return res.redirect('/')
})
//  enter add new one page
app.get('/diners/new', (req, res) => {
  return res.render('new')
})
//  do add new one action
app.post('/diners', (req, res) => {
  const diner = new Diner({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    location: req.body.location,
    image: req.body.image,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description,
  })
  diner.save(err => {
    if (err) return console.error(err)
    console.log('done add')
    return res.redirect('/')
  })
})
//  list one detail
app.get('/diners/:id', (req, res) => {
  Diner.findById(req.params.id, (err, diner) => {
    if (err) return console.error(err)
    return res.render('show', { diner: diner })
  })
})
//  enter edit page
app.get('/diners/:id/edit', (req, res) => {
  Diner.findById(req.params.id, (err, diner) => {
    if (err) return console.error(err)
    return res.render('edit', { diner: diner })
  })
})
//  do edit one action
app.put('/diners/:id', (req, res) => {
  Diner.findById(req.params.id, (err, diner) => {
    if (err) return console.error(err)
    diner.name = req.body.name
    diner.name_en = req.body.name_en
    diner.category = req.body.category
    diner.location = req.body.location
    diner.phone = req.body.phone
    diner.google_map = req.body.google_map
    diner.rating = req.body.rating
    diner.description = req.body.description
    diner.save(err => {
      if (err) return console.error(err)
      return res.redirect(`/diners/${req.params.id}`)
    })
  })
})
//  do delete one action
app.delete('/diners/:id/delete', (req, res) => {
  Diner.findById(req.params.id, (err, diner) => {
    if (err) return console.error(err)
    diner.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

// search
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  Diner.find((err, diners) => {
    if (err) return console.error(err)
    const diner = diners.filter(diner => {
      return diner.name.toLowerCase().includes(keyword.toLowerCase())
    })
    res.render('index', { diners: diner })
  })
})

app.listen(port, () => {
  console.log('app is running')
})