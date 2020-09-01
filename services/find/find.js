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
			if (el.titleType) {
				searchRes.push(el)
			}
		})
		let searchObj = []
		searchRes.map(el => {
			searchObj.push({
				imbd_id: (el.id).split('/title/')[1],
				title: el.title,
				titleType: el.titleType,
				posters: el.image.url,
				years: el.year,
			})
		})
		res.locals.results = searchObj
		next()
	})
	.catch(err => {
		console.log(err)
		next(err)
	}
		
	);
}
module.exports = {
	initialUnPack,
}





