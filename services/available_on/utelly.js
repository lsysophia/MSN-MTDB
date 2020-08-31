const fetch = require('node-fetch')

//pass in imdbId from the other searches

const testId = 'tt0944947'

const getStreamingService = (id) => {
    fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=us&source_id=${id}&source=imdb`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.API_Key,
        },
    })
    .then(res => res.json())
    .then(parsedRes => {
        return parsedRes.collection.locations.map((each) => {
            const streamingService = {
                serviceName: each.display_name,
                serviceLogo: each.icon,
                serviceLink: each.url,
            }
            console.log(streamingService)
            return streamingService
        })
    })
    .catch(err => console.log(err))
}

console.log(getStreamingService(testId))

module.exports = getStreamingService
