# MSN-MTDB 
App with a react in the front end and Express in the backend

Visit us online
- Staging page: https://git.heroku.com/evening-basin-19807.git
- Production page: 

### Description

This application allows users to search for movies and TV shows and save it to their accounts. 

## Workflow

### [Wireframes](https://ibb.co/Hpsq3Jp)

### [DB Schemas](https://ibb.co/s1RnN7m) 

### [Project Board](https://github.com/users/lsysophia/projects/1)

## User Stories

## HTTP Routes

Frontend:  
'/' --> Homepage
'/user' --> User
'/register'
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
- API_Key= [YOUR API KEY]
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