const userMoviesRoute = require('express').Router()

const userMoviesController = require('../controllers/user_movies-controller')

userMoviesRoute.post('/', userMoviesController.create)
userMoviesRoute.delete('/:id([0-9]+)', userMoviesController.delete)

module.exports = userMoviesRoute