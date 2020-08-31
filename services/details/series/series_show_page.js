const fetch = require('node-fetch');
// require('dotenv').config()

const testId = 'tt0944947'

const getDetailByImdbId = (id) => {
	return fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${id}`, {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'imdb8.p.rapidapi.com',
					'x-rapidapi-key': process.env.API_Key
					// process.env.API_Key
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
				console.log([title, image, startYear, endYear, genres, summary])
			})
			.catch(err => console.log(err))
}

// console.log(getDetailByImdbId(testId))

module.exports = getDetailByImdbId