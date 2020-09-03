# MSN-MTDB
GA Project 3 

## Contributers of Squad 3 
- Matt,
- Sophia, 
- Niso 

Movie/TV Database Search App

Visit our 
- Staging page: https://msn-mtvdb.herokuapp.com/
- Production page: 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is simple Lorem ipsum dolor generator.
	


## Wireframes


## DB Schemas



## Technologies
Project is created with:
* bcryptjs: ^2.4.3,
* body-parser: ^1.19.0,
* cookie-parser: ^1.4.5,
* dotenv: ^8.2.0,
* express: ^4.17.1,
* express-session: ^1.17.1,
* morgan: ^1.10.0,
* node-fetch: ^2.6.0,
* passport: ^0.4.1,
* passport-local: ^1.0.0,
* pg-promise: ^10.6.1

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
install it locally using yarn:
```
$ yarn install
$ yarn dev
$ cd client
$ yarn install
$ yarn start
```