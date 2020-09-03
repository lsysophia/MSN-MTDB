const User_movies = require('../models/User_movies')
const User_shows = require('../models/User_shows')
const User_episodes = require('../models/User_episodes')

const inputController = {}

inputController.decide = (req, res, next) => {
    console.log('INPUT CONTROLLER', req.body)
    if (req.body.titleType === 'movie') {
        User_movies.getOneForUser(req.user.id, req.body.imdb_id)
        .then(movie => {
            return movie.update({
                has_watched: req.body.has_watched,
                ratings: req.body.ratings,
            })
        })
        .then(() => {
            res.json({
                message: 'User_movie Updated',
            })
        })
        .catch(next)
    } else if (req.body.titleType === 'tvSeries') {
        User_shows.getOneForUser(req.user.id, req.body.imdb_id)
        .then(show => {
            return show.update({
                has_watched: req.body.has_watched,
                ratings: req.body.ratings,
            })
        })
        .then(() => {
            res.json({
                message: 'User_shows Updated',
            })
        })
        .catch(next)
    } else if (req.body.titleType === 'tvEpisodes') {
        User_episodes.getOneForUser(req.user.id, req.body.imdb_id)
        .then(episode => {
            return episode.update({
                has_watched: req.body.has_watched,
                ratings: req.body.ratings,
            })
        })
        .then(() => {
            res.json({
                message: 'User_episodes Updated',
            })
        })
        .catch(next)
    }
}

module.exports = inputController