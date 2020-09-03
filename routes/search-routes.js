const express = require('express')
const searchRouter = express.Router()

const user_moviesController = require('../controllers/user_movies-controller')
const user_seriesController = require('../controllers/user_series-controller')
const user_episodesController = require('../controllers/user_episodes-controller')
const searchController = require('../controllers/search-controller')
const { initialUnPack } = require('../services/find/find')
const { getDetailByImdbId } = require('../services/find/getOverviewDetails')
const { getStreamingService } = require('../services/available_on/utelly')
const { getSeasons } = require('../services/series/getSeasons')


searchRouter.get('/', user_moviesController.find, user_seriesController.find, user_episodesController.find, searchController.search)


searchRouter.post('/:title', initialUnPack, searchController.results)
searchRouter.post('/details/:imdb_id', getDetailByImdbId, getStreamingService, user_moviesController.index, user_seriesController.index, user_episodesController.index, searchController.decide, getSeasons, searchController.show)
module.exports = searchRouter