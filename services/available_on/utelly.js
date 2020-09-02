const fetch = require('node-fetch')

const getStreamingService = (req, res, next) => {
    fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=us&source_id=${res.locals.imdb_id}&source=imdb`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.API_Key,
        },
    })
    .then(res => res.json())
    .then(parsedRes => {
        let streamers = []
        parsedRes.collection.locations.map(each => {
            streamers.push({
                serviceName: each.display_name,
                serviceLogo: each.icon,
                serviceLink: each.url,
            })
        })
        res.locals.available_on = streamers
    })
    .catch(err => console.log(err))
}
module.exports = getStreamingService
