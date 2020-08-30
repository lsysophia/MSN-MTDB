const express = require('express')
const userRouter = express.Router()
const passport = require('../controllers/users-controller')
const usersController = require('../controllers/users-controller')

userRouter.get('/', usersController.index)

userRouter.put('/edit/:id([0-9]+)', usersController.update)

userRouter.delete('/:id([0-9]+)', usersController.delete)

module.exports = userRouter;