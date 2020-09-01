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
			res.locals.image = parsedRes.title.image.url
			res.locals.runTime = parsedRes.title.runningTimeInMinutes
			res.locals.certificateRating = parsedRes.certificates.US.map(el => el.certificate)
			res.locals.certificateRatingReason = parsedRes.certificates.US.map(el => el.ratingReason)
			res.locals.ratings = parsedRes.ratings.rating
			res.locals.genres = parsedRes.genres
			res.locals.releaseDate = parsedRes.releaseDate
			res.locals.summaryAuthor = parsedRes.plotSummary.author
			res.locals.summary = parsedRes.plotSummary.text
			// WE MAY OR MAY NOT NEED BELOW ITEMS IF SEASONS FETCH COLLECT GOOD DATA
			res.locals.episodeCount = parsedRes.numberOfEpisodes
			res.locals.startYear = parsedRes.title.seriesStartYear
			res.locals.endYear = parsedRes.title.seriesEndYear

		})
		.catch(err => {
			console.log(err)
			next(err)
		})
}
module.exports = {
	getDetailByImdbId,
}