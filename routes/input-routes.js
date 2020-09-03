const express = require('express')
const inputRouter = express.Router()

const inputController = require('../controllers/input-controller')

inputRouter.post('/', inputController.decide)

module.exports = inputRouter