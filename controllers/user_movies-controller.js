const User_movies = require('../models/User_movies')

const user_moviesController = {}

user_moviesController.index = (req, res, next) => {
    User_movies.getAllforUser(req.user.id)
    .then(movies => {
        res.locals.userMovies = movies
        next();
    })
    .catch(next)
}

module.exports = user_moviesController