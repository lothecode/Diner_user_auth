const express = require('express')
const router = express.Router()
const Diner = require('../models/diner')

router.get('/:sort', (req, res) => {
  if (req.params.sort === 'name_asc') {
    Diner.find()
      .sort({ name: 'asc' }).exec((err, diners) => {
        if (err) return console.error(err)
        return res.render('index', { diners: diners, sort: '依餐廳名稱(A->Z)排序' })
      })
  } else if (req.params.sort === 'name_desc') {
    Diner.find()
      .sort({ name: 'desc' }).exec((err, diners) => {
        if (err) return console.error(err)
        return res.render('index', {
          diners: diners, sort: '依餐廳名稱(Z->A)排序'
        })
      })
  } else if (req.params.sort === 'category_asc') {
    Diner.find()
      .sort({ category: 'asc' }).exec((err, diners) => {
        if (err) return console.error(err)
        return res.render('index', {
          diners: diners, sort: '依餐廳類別(A-> Z)排序'
        })
      })
  } else if (req.params.sort === 'rating_asc') {
    Diner.find()
      .sort({ rating: 'desc' }).exec((err, diners) => {
        if (err) return console.error(err)
        return res.render('index', { diners: diners, sort: '依評價(高->低)排序' })
      })
  }

})

module.exports = router