const express = require('express')
const router = express.Router()
const Diner = require('../models/diner')

//  list all
router.get('/', (req, res) => {
  return res.redirect('/')
})
//  enter add new one page
router.get('/new', (req, res) => {
  return res.render('new')
})
//  do add new one action
router.post('/', (req, res) => {
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
router.get('/:id', (req, res) => {
  Diner.findById(req.params.id, (err, diner) => {
    if (err) return console.error(err)
    return res.render('show', { diner: diner })
  })
})
//  enter edit page
router.get('/:id/edit', (req, res) => {
  Diner.findById(req.params.id, (err, diner) => {
    if (err) return console.error(err)
    return res.render('edit', { diner: diner })
  })
})
//  do edit one action
router.put('/:id', (req, res) => {
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
router.delete('/:id/delete', (req, res) => {
  Diner.findById(req.params.id, (err, diner) => {
    if (err) return console.error(err)
    diner.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router