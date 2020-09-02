const fetch = require('node-fetch');
require('dotenv').config()

const initialUnPack = (req, res, next) => {
	fetch(`https://imdb8.p.rapidapi.com/title/find?q=${req.params.title}`, {
		method: 'GET',
		headers: {
			'x-rapidapi-host': 'imdb8.p.rapidapi.com',
			'x-rapidapi-key': process.env.API_Key
		},
	})
	.then(res => res.json())
	.then(parsedRes => {
		let searchRes = []
		parsedRes.results.map(el => {
			if (el.titleType === 'movie' || el.titleType === 'tvSeries') {
				searchRes.push({
					imdb_id: (el.id).split('/title/')[1],
					title: el.title,
					titleType: el.titleType,
					posters: (el.image) ? el.image.url : '',
					years: el.year,
				})
			}
		})
		res.locals.results = searchRes
		next()
	})
	.catch(err => {
		console.log(err)
		next(err)
	})
}
module.exports = {
	initialUnPack,
}





