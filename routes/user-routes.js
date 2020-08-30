const express = require('express')
const userRouter = express.Router()

const usersController = require('../controllers/users-controller')
const moviesController = require('../controllers/movies-controller')
const seriesController = require('../controllers/series-controller')
const episodeController = require('../controllers/episodes-controller')

userRouter.get('/:id([0-9]+)', moviesController.index, seriesController.index, episodeController.index, usersController.index)

userRouter.delete('/:id([0-9]+)', usersController.delete)

userRouter.put('/edit/:id([0-9]+)', usersController.update)

module.exports = userRouter;