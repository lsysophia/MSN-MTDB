const searchRouter = require("../routes/search-routes")

const searchController = {}

searchController.decide = (req, res, next) => {
    if (res.locals.type === 'Movie') {
        // go to the movie show page
    } else {
        // go to the seasons fetch
    }
}
module.exports = searchController