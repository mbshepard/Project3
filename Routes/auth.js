const express = require('express')
const passport = require('passport')

const Db = require('../models')
const User = require('../models/userData')
const router = express.Router()

router.post('/createuser', (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err })
    }
    if (!user) {
      async ({ body }, res) => {
        const user = await User.create(body)
          try {
            res.send(user) 
          } catch (error) {
            console.log(error)
          }
      }
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({ errors: err })
      }
      return res.status(200).json(user)
    })
  })(req, res, next)
})

module.exports = router
