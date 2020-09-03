const User_shows = require('../models/User_shows')

const user_seriesController = {}

user_seriesController.index = (req, res, next) => {
    if (req.user) {
        User_shows.getAllForUser(req.user.id)
        .then(series => {
            res.locals.userSeries = series
            next();
        })
        .catch(next)
    } else {
        next()
    }
}

user_seriesController.find= (req, res, next) => {
    User_shows.getAll()
    .then(shows => {
        res.locals.allShows = shows
        next()
    })
    .catch(next)
}

user_seriesController.create = (req, res, next) => {
    new User_shows({
        title: req.body.title,
        imdb_id: req.body.imdb_id,
        ratings: null,
        has_watched: false,
        watched_time: null,
        user_id: req.user.id,
    })
        .save()
        .then(show => {
            res.json({
                message: 'Show added',
                data: { show },
            })
        })
        .catch(next)
}

user_seriesController.delete = (req, res, next) => {
    User_shows.getById(req.params.id)
        .then(show => show.delete())
        .then(() => {
            res.json({
                message: 'Show deleted successfully'
            })
        })
        .catch(next)
}

module.exports = user_seriesController