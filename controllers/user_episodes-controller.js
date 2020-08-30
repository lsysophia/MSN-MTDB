const User_episodes = require('../models/User_episodes')

const user_episodesController = {}

user_episodesController.index = (req, res, next) => {
    User_episodes.getAllforUser(req.user.id)
    .then(episodes => {
        res.locals.userEpisodes = episodes
        next();
    })
    .catch(next)
}

module.exports = user_episodesController