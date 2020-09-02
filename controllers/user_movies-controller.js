const User_movies = require('../models/User_movies')

const user_moviesController = {}

user_moviesController.index = (req, res, next) => {
    User_movies.getAllForUser(req.user.id)
        .then(movies => {
            res.locals.userMovies = movies
            next();
        })
        .catch(next)
}

user_moviesController.update = (req, res, next) => {
    User_movies.getById(req.params.id)
        .then(movie => {
            movie.update({
                title: req.body.title,
                imdb_id: req.body.imdb_id,
                ratings: req.body.ratings,
                has_watched: req.body.has_watched,
                watched_time: req.body.watched_time,
                user_id: req.body.user_id,
            })
        }).then(movie => {
            res.json({
                message: "Updated",
                data: { movie },
            })
        })
        .catch(next)
}


user_moviesController.delete = (req, res, next) => {
    User_movies.getById(req.params.id)
        .then(movie => movie.delete())
        .then(() => {
            res.json({
                message: 'Successfully deleted'
            })
        })
        .catch(next);
}

user_moviesController.create = (req, res, next) => {
    console.log(req)
    new User_movies({
        title: req.body.title,
        imdb_id: req.body.imdb_id,
        user_id: req.body.user_id,
    }).save()
        .then(movie => {
            res.json({
                message: 'Movie added to users saved list',
                data: { movie }
            })
        }).catch(next);
}

module.exports = user_moviesController