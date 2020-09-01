const fetch = require('node-fetch');
require('dotenv').config()

const getDetailByImdbId = (req, res, next) => {
	fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${res.locals.imdb_id}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': process.env.API_Key
			},
		})
		.then(res => res.json())
		.then(parsedRes => {
			const title = parsedRes.title.title
			const image = parsedRes.title.image.url
			const startYear = parsedRes.title.seriesStartYear
			const endYear = parsedRes.title.seriesEndYear
			const genres = parsedRes.genres
			const summary = parsedRes.plotSummary.text
			console.log([title, titleType, image, startYear, endYear, genres, summary])
		})
		.catch(err => {
			console.log(err)
			next(err)
		})
}
module.exports = {
	getDetailByImdbId,
}