const searchRouter = require("../routes/search-routes")

const searchController = {}

searchController.search = (req, res, next) => {
    res.json({
        message: 'ok',
        data: {
            movies: res.locals.allMovies,
            shows: res.locals.allShows,
            episodes: res.locals.allEpisodes,
        }
    })
}

searchController.results = (req, res, next) => {
    res.json({
        message: 'ok',
        data: {
            results: res.locals.results,
        }
    })
}

searchController.decide = (req, res, next) => {
    if (res.locals.titleType === 'movie') {
        res.json({
            message: 'ok',
            data: {
                // add middleware to pick up actors if we want them
                imdb_id: res.locals.imdb_id,
                title: res.locals.title,
                year: res.locals.year,
                titleType: res.locals.titleType,
                image: res.locals.image,
                runTime: res.locals.runTime,
                certificate: res.locals.certificate,
                ratings: res.locals.ratings,
                genres: res.locals.genres,
                releaseDate: res.locals.releaseDate,
                summary: res.locals.summary,
                outline: res.locals.outline,
                available_on: res.locals.available_on,
            }
        })
    } else {
        next()
        // what about videoGames
    }
}

searchController.show = (req, res, next) => {
    res.json({
        message: 'ok',
        data: {
            imdb_id: res.locals.imdb_id,
            title: res.locals.title,
            year: res.locals.year,
            titleType: res.locals.titleType,
            image: res.locals.image,
            runTime: res.locals.runTime,
            certificate: res.locals.certificate,
            ratings: res.locals.ratings,
            genres: res.locals.genres,
            releaseDate: res.locals.releaseDate,
            summary: res.locals.summary,
            outline: res.locals.outline,
            available_on: res.locals.available_on,
            season: res.locals.showSeasons,
            parentTitle_id: res.locals.parentTitle_id,
        }
    })
}
module.exports = searchController