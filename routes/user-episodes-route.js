const userEpisodeRoute = require('express').Router()

const userEpisodesController = require('../controllers/user_episodes-controller')

userEpisodeRoute.post('/', userEpisodesController.create)
userEpisodeRoute.delete('/:id([0-9]+)', userEpisodesController.delete)

module.exports = userEpisodeRoute