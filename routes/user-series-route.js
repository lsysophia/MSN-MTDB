const userSeriesRoute = require('express').Router()

const userSeriesController = require('../controllers/user_series-controller')

userSeriesRoute.post('/', userSeriesController.create)
userSeriesRoute.delete('/:id([0-9]+)', userSeriesController.delete)

module.exports = userSeriesRoute