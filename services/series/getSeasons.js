const fetch = require('node-fetch');
require('dotenv').config()

const getSeasons = (req, res, next) => {
	return fetch(`https://imdb8.p.rapidapi.com/title/get-seasons?tconst=${res.locals.imdb_id}`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'imdb8.p.rapidapi.com',
			'x-rapidapi-key': process.env.API_Key
		},
	})
		.then(res => res.json())
		.then(parsedRes => {
			// console.log('EPISODES', parsedRes.map(el => el.episodes))
			// console.log('SEASONS', parsedRes.map(el => el.seasons))
			res.locals.showSeasons = parsedRes
			next()
		})
		.catch(err => console.log(err))
}
module.exports = {
	getSeasons,
}