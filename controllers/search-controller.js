const searchRouter = require("../routes/search-routes")

const searchController = {}

searchController.results = (req, res, next) => {
    res.json({
        message: 'ok',
        data: {
            results: res.locals.results,
        }
    })
}

searchController.decide = (req, res, next) => {
    if (res.locals.type === 'Movie') {
        // go to the movie show page
    } else {
        // go to the seasons fetch
    }
}
module.exports = searchController