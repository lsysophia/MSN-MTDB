const fetch = require('node-fetch');
// require('dotenv').config()

const testId = 'tt0944947'

const getEpisodes = (id) => {
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
				const episodes = parsedRes.map((eachSeason) => {
					return eachSeason.episodes.map((ep) => {
						return {epImdbId: ep.id, epSeason: ep.season}
					})
				})
					console.log(episodes)
					return episodes
			})
			.catch(err => console.log(err))
}

console.log(getEpisodes(testId))

module.exports = getEpisodes