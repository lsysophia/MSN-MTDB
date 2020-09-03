const User_movies = require('../models/User_movies')

const user_moviesController = {}

user_moviesController.index = (req, res, next) => {
    if (req.user) {
        User_movies.getAllForUser(req.user.id)
        .then(movies => {
            res.locals.userMovies = movies
            next();
        })
        .catch(next)
    } else {
        next()
    }
}

user_moviesController.find= (req, res, next) => {
    User_movies.getAll()
    .then(movies => {
        res.locals.allMovies = movies
        next()
    })
    .catch(next)
}

user_moviesController.create = (req, res, next) => {
    console.log(req.user)
    new User_movies({
        title: req.body.title,
        imdb_id: req.body.imdb_id,
        ratings: null,
        has_watched: false,
        watched_time: null,
        user_id: req.user.id,
    }).save()
        .then(movie => {
            res.json({
                message: 'Movie added to users saved list',
                data: { movie }
            })
        }).catch(next);
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

module.exports = user_moviesController