const User_episodes = require('../models/User_episodes')

const user_episodesController = {}

user_episodesController.index = (req, res, next) => {
    User_episodes.getAllForUser(req.user.id)
        .then(episodes => {
            res.locals.userEpisodes = episodes
            next();
        })
        .catch(next)
}
user_episodesController.create = (req, res, next) => {
    console.log('FINAL STOP IN', req.body)
    new User_episodes({
        title: req.body.title,
        imdb_id: req.body.imdb_id,
        ratings: null,
        has_watched: false,
        watched_time: null,
        show_id: req.body.parentTitle_id,
        user_id: req.user.id,
    })
        .save()
        .then(episode => {
            res.json({
                message: 'Episode added',
                data: { episode },
            })
        })
        .catch(next)
}

user_episodesController.update = (req, res, next) => {
    User_episodes.getById(req.params.id)
        .then(episode => {
            episode.update({
                title: req.body.title,
                imdb_id: req.body.imdb_id,
                ratings: req.body.ratings,
                has_watched: req.body.has_watched,
                series_id: req.body.series_id,
                user_id: req.body.user_id,
            })
        })
        .then(episode => {
            res.json({
                message: 'Episode updated',
                data: { episode }
            })
        }).catch(next)
}

user_episodesController.delete = (req, res, next) => {
    User_episodes.getById(req.params.id)
        .then(episode => episode.delete())
        .then(() => {
            res.json({
                message: 'Episode deleted successfully'
            })
        })
        .catch(next)
}

module.exports = user_episodesController