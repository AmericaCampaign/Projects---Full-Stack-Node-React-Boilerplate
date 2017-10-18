const express = require('express')

const Router = express.Router()
const User = require('../models/User')

Router.route('/')
  .get((req, res) => {
    User.find((err, users) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'all users 🕺🏻', data: users })
      }
    })
  })
  .post((req, res) => {
    const user = new User()
    console.log(req.body)
    user.loadData(req.body)
    user.setMetaDates()
    user.save((err, user) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: `User: ${user.name} succesfully created`, data: user })
      }
    })
  })
Router.route('/:user_id')
  .delete((req, res) => {
    User.remove({_id: req.params.user_id}, (err) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'User Deleted', data: {} })
      }
    })
  })
  .put((req, res) => {
    User.findById(req.params.user_id, (er, user) => {
      if (er) return res.status(500)
      if (!user) return res.status(404)
      user.loadData(req.body)
      user.save((err, updatedUser) => {
        if (err) {
          res.json({ message: err, data: null })
        } else {
          res.json({ updatedUser, message: 'User Updated' })
        }
      })
    })
  })
module.exports = Router
