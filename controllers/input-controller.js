const User_movies = require('../models/User_movies')
const User_shows = require('../models/User_shows')
const User_episodes = require('../models/User_episodes')

const inputController = {}

inputController.decide = (req, res, next) => {
    if (req.body.titleType === 'movie') {
        User_movies.getOneForUser(req.user.id, req.body.imdb_id)
        .then(movie => {
            console.log(';lajdfo;ija;slkdhf;asihd;oihjasd;lfjadjf;ljasd;lfhas;dvh;alks')
            let currentDate = new Date()
            let date = currentDate.getDate()
            let month = currentDate.getMonth()
            let year = currentDate.getFullYear()
            let timestamp = currentDate.getTime()
            let dateString = date + "-" +(month + 1) + "-" + year + " / " + timestamp
            console.log('DATE STRING', dateString)
            if (req.body.check) {
                return movie.update({
                    ratings: req.body.ratings,
                    has_watched: req.body.has_watched,
                })
            } else {
                return movie.update({
                    ratings: req.body.ratings,
                    has_watched: req.body.has_watched,
                    watched_time: dateString,
                })
            }
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
            console.log(';lajdfo;ija;slkdhf;asihd;oihjasd;lfjadjf;ljasd;lfhas;dvh;alks')
            let currentDate = new Date()
            let date = currentDate.getDate()
            let month = currentDate.getMonth()
            let year = currentDate.getFullYear()
            let timestamp = currentDate.getTime()
            let dateString = date + "-" +(month + 1) + "-" + year + " / " + timestamp
            console.log('DATE STRING', dateString)
            if (req.body.check) {
                return show.update({
                    ratings: req.body.ratings,
                    has_watched: req.body.has_watched,
                })
            } else {
                return show.update({
                    ratings: req.body.ratings,
                    has_watched: req.body.has_watched,
                    watched_time: dateString,
                })
            }
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
            console.log(';lajdfo;ija;slkdhf;asihd;oihjasd;lfjadjf;ljasd;lfhas;dvh;alks')
            let currentDate = new Date()
            let date = currentDate.getDate()
            let month = currentDate.getMonth()
            let year = currentDate.getFullYear()
            let timestamp = currentDate.getTime()
            let dateString = date + "-" +(month + 1) + "-" + year + " / " + timestamp
            console.log('DATE STRING', dateString)
            if (req.body.check) {
                return episode.update({
                    ratings: req.body.ratings,
                    has_watched: req.body.has_watched,
                })
            } else {
                return episode.update({
                    ratings: req.body.ratings,
                    has_watched: req.body.has_watched,
                    watched_time: dateString,
                })
            }
        })
        .then(() => {
            res.json({
                message: 'User_episodes Updated',
            })
        })
        .catch(next)
    }
}

inputController.delete = (req, res, next) => {
    if (req.body.titleType === 'movie') {
        User_movies.getOneForUser(req.user.id, req.params.id)
        .then(movie => {
            return movie.delete()
        })
        .then(() => {
            res.json({
                message: 'User_movie Deleted',
            })
        })
        .catch(next)
    } else if (req.body.titleType === 'tvSeries') {
        User_shows.getOneForUser(req.user.id, req.params.id)
        .then(show => {
            return show.delete()
        })
        .then(() => {
            res.json({
                message: 'User_shows Deleted',
            })
        })
        .catch(next)
    } else if (req.body.titleType === 'tvEpisodes') {
        User_episodes.getOneForUser(req.user.id, req.params.id)
        .then(episode => {
            return episode.delete()
        })
        .then(() => {
            res.json({
                message: 'User_episodes Deleted',
            })
        })
        .catch(next)
    }
}

module.exports = inputController