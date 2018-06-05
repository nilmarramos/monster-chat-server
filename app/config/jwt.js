module.exports = app => ({
  validate: (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const User = app.models.user
    const authHeader = req.headers['authorization']
    const key = require('../config/urls').token
    const Errors = require('../errors/system').token

    if (!authHeader) res.status(401).json(Errors.authenticate)

    const parts = authHeader.split(' ')
    const token = parts[1]
    const scheme = parts[0]

    if (!parts.length === 2) res.status(401).json(Errors.isInvalid)

    if (!/^Bearer$/i.test(scheme)) res.status(401).json(Errors.malFormatted)

    jwt.verify(token, key, async (err, decoded) => {
      if (err) res.status(401).json(Errors.isInvalid)
      try {
        const user = await User.findOne({ token: token })
        req.user = user
        next()
      } catch (error) {
        res.status(500).json(Errors.notToken)
      }
    })
  }
})
