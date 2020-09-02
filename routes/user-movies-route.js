const userMoviesRoute = require('express').Router()

const userMoviesController = require('../controllers/user_movies-controller')

userMoviesRoute.get('/', userMoviesController.index)
userMoviesRoute.post('/', userMoviesController.create)
// userMoviesRoute.get('/', userMoviesController.show)
userMoviesRoute.put('/', userMoviesController.update)
userMoviesRoute.delete('/', userMoviesController.delete)

module.exports = userMoviesRoute