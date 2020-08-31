const fetch = require('node-fetch');
// require('dotenv').config()

const testId = 'tt0944947'

const getSeasons = (id) => {
	return fetch(`https://imdb8.p.rapidapi.com/title/get-seasons?tconst=${id}`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'imdb8.p.rapidapi.com',
			'x-rapidapi-key': process.env.API_Key
			// 
		},
	})
		.then(res => res.json())
		.then(parsedRes => {
			const seasons = parsedRes.map((each) => {
				return each.season
			})
			console.log(seasons)
			return seasons
		})
		.catch(err => console.log(err))
}

console.log(getSeasons(testId))

module.exports = getSeasons