const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

const authRouter = require('./routes/auth-routes')
const userRouter = require('./routes/user-routes')
const inputRouter = require('./routes/input-routes')
const searchRouter = require('./routes/search-routes')
const userMoviesRouter = require('./routes/user-movies-route')
const userSeriesRouter = require('./routes/user-series-route')
const userEpisodesRouter = require('./routes/user-episodes-route')

const app = express()
require('dotenv').config()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
    session({
        key: process.env.SECRET_KEY,
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    }),
)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('public'))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/search', searchRouter)
app.use('/api/movies', userMoviesRouter)
app.use('/api/series', userSeriesRouter)
app.use('/api/episodes', userEpisodesRouter)
app.use('/api/input', inputRouter)

app.use('*', (req, res) => {
    res.status(400).json({
        message: 'Page not found!',
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: err,
        message: err.message,
    })
})

