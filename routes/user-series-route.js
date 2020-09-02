const userSeriesRoute = requure('express').Router()

const userSeriesController = require('../controllers/user_series-controller')

userSeriesRoute.get('/', userSeriesController.index)
userSeriesRoute.post('/', userSeriesController.create)
userSeriesRoute.put('/:id([0-9]+)', userSeriesController.update)
userSeriesRoute.delete('/:id([0-9]+)', userSeriesController.delete)

module.exports = userSeriesRoute