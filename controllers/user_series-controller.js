const User_series = require('../models/User_series')

const user_seriesController = {}

user_seriesController.index = (req, res, next) => {
    User_series.getAllforUser(req.user.id)
    .then(series => {
        res.locals.userSeries = series
        next();
    })
    .catch(next)
}

module.exports = user_seriesController