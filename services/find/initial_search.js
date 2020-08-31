const fetch = require('node-fetch');
// const { parse } = require('dotenv/types');
// require('dotenv').config()

// const test = 'batman'

// //initial fetch to get imdbid of the title
const initialUnPack = (title) => {
	return fetch(`https://imdb8.p.rapidapi.com/title/find?q=${title}`, {
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'imdb8.p.rapidapi.com',
				'x-rapidapi-key': process.env.API_Key
				// process.env.API_Key
			},
		})
		.then(res => res.json())
		.then(parsedRes => {
			return parsedRes.results.map((obj) => {
				if(obj.titleType) {
					const result = {
						id: obj.id,
						title: obj.title,
						image: obj.image.url
					}
					console.log(result)
					return result
				}
			})
		})
		.catch(err => 
			console.log(err)
		);
}

// console.log(initialUnPack(test))

module.exports = initialUnPack





