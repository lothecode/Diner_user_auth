const express = require('express')
const router = express.Router()
const Diner = require('../models/diner')

// search
router.get('/', (req, res) => {
  const keyword = req.query.keyword
  Diner.find((err, diners) => {
    if (err) return console.error(err)
    const diner = diners.filter(diner => {
      return diner.name.toLowerCase().includes(keyword.toLowerCase())
    })
    res.render('index', { diners: diner })
  })
})

module.exports = router