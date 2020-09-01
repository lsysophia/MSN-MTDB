const fetch = require('node-fetch');
require('dotenv').config()

const getDetailByImdbId = (req, res, next) => {
	fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${req.params.imdb_id}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': process.env.API_Key
			},
		})
		.then(res => res.json())
		.then(parsedRes => { 
			res.locals.imdb_id = parsedRes.id
			res.locals.title = parsedRes.title.title
			res.locals.titleType = parsedRes.title.titleType
			res.locals.image = (parsedRes.title.image) ? parsedRes.title.image.url : null
			res.locals.runTime = (parsedRes.title.runningTimeInMinutes) ? parsedRes.title.runningTimeInMinutes : null
			res.locals.certificate = (parsedRes.certificates) ? parsedRes.certificates : null
			res.locals.ratings = (parsedRes.ratings.rating) ? parsedRes.ratings.rating : null
			res.locals.genres = (parsedRes.genres) ? parsedRes.genres : null
			res.locals.releaseDate = (parsedRes.releaseDate) ? parsedRes.releaseDate : null
			res.locals.summary = (parsedRes.plotSummary) ? parsedRes.plotSummary : null
			res.locals.outline = (parsedRes.plotOutline) ? parsedRes.plotOutline.text : null
			// WE MAY OR MAY NOT NEED BELOW ITEMS IF SEASONS FETCH COLLECT GOOD DATA
			res.locals.episodeCount = (parsedRes.numberOfEpisodes) ? parsedRes.numberOfEpisodes : null
			res.locals.startYear = (parsedRes.title.seriesStartYear) ? parsedRes.title.seriesStartYear : null
			res.locals.endYear = (parsedRes.title.seriesEndYear) ? parsedRes.title.seriesEndYear : null
			// console.log('locals HEREEEE', res.locals)
			next()
		})
		.catch(err => {
			console.log(err)
			next(err)
		})
}
module.exports = {
	getDetailByImdbId,
}