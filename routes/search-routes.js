const express = require('express')
const searchRouter = express.Router()

const user_moviesController = require('../controllers/user_movies-controller')
const user_seriesController = require('../controllers/user_series-controller')
const searchController = require('../controllers/search-controller')
const { initialUnPack } = require('../services/find/find')
const { getDetailByImdbId } = require('../services/find/getOverviewDetails')
const { getStreamingService } = require('../services/available_on/utelly')


searchRouter.get('/', user_moviesController.index, user_seriesController.index, (req, res) => {
    res.json({
        message: 'ok',
        data: {
            movies: res.locals.userMovies,
            series: res.locals.userSeries,
        }
    })
})


searchRouter.post('/:title', initialUnPack, searchController.results)
searchRouter.post('/details/:imdb_id', getDetailByImdbId, getStreamingService, searchController.decide)
module.exports = searchRouter