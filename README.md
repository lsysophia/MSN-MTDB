# MSN-MTDB 
App with a react in the front end and Express in the backend

Visit us online
- Staging page: https://evening-basin-19807.herokuapp.com/
- Production page: https://msn-mtdb.herokuapp.com/

### Description

This application allows users to search for movies and TV shows and save it to their accounts, while also keeping track of what they  have watched and what they will watch.

## Workflow

Once we developed the user stories, we were able to identify the initial work for setting up the express server. We talked through all the models and controllers that we will need. We have also refined the server structure when we updated our database. We decided that instead of creating multiple tables in the backend to store all information fetched from the API, we will use the API as the database for movies and shows, our backend databases will only store user-related information(user profile, user saved movies/shows/episodes). After the initial set up was done, we moved on to the React side set up and connecting the backend to the front end. Styling was done little by little along the way. 

### [Wireframes](https://ibb.co/Hpsq3Jp)

### [DB Schemas](https://ibb.co/s1RnN7m) 

### [Project Board](https://github.com/lsysophia/MSN-MTDB/projects/1)

## User Stories
- Visitors have a choice to use the search engine or create a new account.
- Visitor can search without an account
- Initial landing on the search page will display movies, tv shows, and show episodes that users across the platform have saved
- Search function will allow you to find-by movie and tv show titles.
- Show pages for an individual title will provide detailed information with a plot summary, release date, rating, genres. Links to streaming services available for that specific title.
- Users that have created an account and will have a profile page with user information and existing watchlist.
- User can edit their account info
- User can remove their account
- User can save movies, tv shows, and show episodes to their watchlist
- User can remove movies, tv shows, and show episodes from their watchlist
- User can update a certain title to Watched status
- User can have their own ratings for each movie and tv show that they have in their watchlist
- About page will display info about the website/app, what it is about, links to register and log-in.


## HTTP Routes

Frontend:  
'/' --> Homepage
'/user' --> User profile
'/register'
'/login'
'/logout'
'/user/edit'
'/search/'
'/details/:id'
'/about'

API:

/api/auth
/api/user
/api/search
/api/movies
/api/series
/api/episodes

## Specs 

### Technologies


### APIs
* [IMDB ](https://rapidapi.com/apidojo/api/imdb8)
* [UTELLY](https://rapidapi.com/utelly/api/utelly)

## Setup

Create your own .env file on your root level. 

### Required fields
- SECRET_KEY= [YOUR SECRET KEY]
- DB_NAME= [YOUR_DB_NAME]
- NODE_ENV=development
- API_Key= [YOUR API KEY] --> for IMDB data fetch
- UTELLY_HOST= utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com
- UTELLY_KEY= [YOUR API KEY]
- IMDB_HOST=imdb8.p.rapidapi.com

### To run this project, 

- Fork the project or download it in your machine
- Create your database in psql
- Create database, run the migration files and create tables from db/migrations 

install yarn and start the servers:
```
$ yarn install
$ yarn dev
$ cd client
$ yarn install
$ yarn start
```

browse to localhost:3000 or your favorite {PORT}


## Contributers of Squad 3 
- Matt,
- Sophia, 
- Niso 