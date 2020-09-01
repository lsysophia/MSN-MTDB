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
		parsedRes.results.map((obj) => {
			res.locals.imbd_id = obj.imbd_id,
			res.locals.title = obj.title,
			res.locals.image = obj.image.url
			res.locals.titleType = obj.titleType
			next()
		})
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





