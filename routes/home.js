const express = require('express')
const router = express.Router()
const Diner = require('../models/diner')
//  Home
router.get('/', (req, res) => {
  Diner.find((err, diners) => {
    if (err) return console.error(err)
    return res.render('index', { diners: diners })
  })
})

module.exports = router