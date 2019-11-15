const mongoose = require('mongoose')
const Diner = require('../Diner')
const restaurant = require('../../restaurant.json').results

mongoose.connect('mongodb://localhost/DinerList', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('db connected!')
  for (let i of restaurant) {
    Diner.create({ name: `${i.name}`, name_en: `${i.name_en}`, category: `${i.category}`, image: `${i.image}`, location: `${i.location}`, phone: `${i.phone}`, google_map: `${i.google_map}`, rating: `${i.rating}`, description: `${i.description}` })
  }
  console.log('done')
})