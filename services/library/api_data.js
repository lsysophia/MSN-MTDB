const fetch = require('node-fetch')
const apiKey = process.env.API_Key

//initial fetch to get imdbid of the title
const getImdbId = (title) => {
	fetch(`https://imdb8.p.rapidapi.com/title/find?q=${title}`, {
		// method: 'GET',
		headers: {
			// host: 'imdb8.p.rapidapi.com',
			key: process.env.API_Key
		},
	})
	.then((res) => {
		// console.log(res.json())
		return res.json()
	})
	.then((parsedRes) => {
		console.log('parsed' + parsedRes)
		// const imdbId = parsedRes.results[0].id
		// console.log(imdbId)
	})
	.catch(err => {
		console.log(err);
	});

}

const getBatmanID = getImdbId('Batman')
console.log(`this is Batman:  ${getBatmanID}`)