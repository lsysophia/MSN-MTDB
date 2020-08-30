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
				'x-rapidapi-key': '67e8e014d2msh96d726256c2134fp15289djsna9182c6ad04a'
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

// const testId = 'tt0944947'

// second fetch by imdbId for show page
const getDetailByImdbId = (id) => {
	return fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${id}`, {
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'imdb8.p.rapidapi.com',
					'x-rapidapi-key': '67e8e014d2msh96d726256c2134fp15289djsna9182c6ad04a'
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
				// console.log([title, image, startYear, endYear, genres, summary])
			})
			.catch(err => console.log(err))
}

// console.log(getDetailByImdbId(testId))

fetch('https://imdb8.p.rapidapi.com/title/get-seasons?tconst=tt0944947', {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'imdb8.p.rapidapi.com',
		'x-rapidapi-key': '67e8e014d2msh96d726256c2134fp15289djsna9182c6ad04a'
		// process.env.API_Key
	},
})
	.then(res => res.json())
	.then(parsedRes => {
		const seasons = parsedRes.map((each) => {
			return each.season
		})
			console.log(seasons)


		const episodeIds = parsedRes.map((eachSeason) => {
			eachSeason.episodes.map((ep) => {
				return ep.id
			})
		})
			console.log(episodeIds)
	})



