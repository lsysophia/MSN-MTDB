const User_movies = require('../models/User_movies')

const user_moviesController = {}

user_moviesController.index = (req, res, next) => {
    User_movies.getAllForUser(req.user.id)
        .then(movies => {
            res.locals.movies = movies
            next();
        })
        .catch(next)
}

user_moviesController.create = (req, res, next) => {
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