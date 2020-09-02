const User_series = require('../models/User_shows')

const user_seriesController = {}

user_seriesController.index = (req, res, next) => {
    User_shows.getAllforUser(req.user.id)
        .then(series => {
            res.locals.userSeries = series
            next();
        })
        .catch(next)
}

user_seriesController.create = (req, res, next) => {
    new User_shows({
        title: req.body.title,
        imdb_id: req.body.imdb_id,
        ratings: req.body.ratings,
        has_watched: req.body.has_watched,
        watched_time: req.body.watched_time,
        user_id: req.body.user_id,
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

user_seriesController.update = (req, res, next) => {
    User_shows.getById(req.params.id)
        .then(show => {
            show.update({
                title: req.body.title,
                imdb_id: req.body.imdb_id,
                ratings: req.body.ratings,
                has_watched: req.body.has_watched,
                watched_time: req.body.watched_time,
                user_id: req.body.user_id,
            })
        })
        .then(show => {
            res.json({
                message: 'Show updated',
                data: { show }
            })
        }).catch(next)
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