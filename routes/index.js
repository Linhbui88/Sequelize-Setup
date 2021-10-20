const router = require('express').Router()
const { Model } = require('sequelize/types')
const apiRoutes = require('./api')

apiRoutes.use('./api',apiRoutes)
model.exports= router