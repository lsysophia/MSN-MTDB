const fetch = require('node-fetch')
require('dotenv').config()

const getStreamingService = (req, res, next) => {
    fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=us&source_id=${res.locals.imdb_id}&source=imdb`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.UTELLY_KEY,
        },
    })
    .then(res => res.json())
    .then(parsedRes => {
        res.locals.available_on = parsedRes.collection.locations
        next()
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
}
module.exports = {
    getStreamingService,
}
