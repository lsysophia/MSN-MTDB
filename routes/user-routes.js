const express = require('express')
const userRouter = express.Router()

const usersController = require('../controllers/users-controller')
const user_moviesController = require('../controllers/user_movies-controller')
const user_seriesController = require('../controllers/user_series-controller')
const user_episodesController = require('../controllers/user_episodes-controller')

userRouter.get('/:id([0-9]+)', user_moviesController.index, user_seriesController.index, user_episodesController.index, usersController.index)

userRouter.delete('/:id([0-9]+)', usersController.delete)

userRouter.put('/edit/:id([0-9]+)', usersController.update)

module.exports = userRouter;