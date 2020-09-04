import React, { Component } from 'react'
export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataLoaded: false,
            imdb_id: this.props.selected.imdb_id,
            title: this.props.selected.title,
            year: this.props.selected.year,
            titleType: this.props.selected.titleType,
            image: this.props.selected.image,
            runTime: this.props.selected.runTime,
            certificate: this.props.selected.certificate,
            ratings: this.props.selected.ratings,
            genres: this.props.selected.genres,
            releaseDate: this.props.selected.releaseDate,
            summary: this.props.selected.summary,
            outline: this.props.selected.outline,
            parentTitle_id: (this.props.selected.parentTitle_id) ? (this.props.selected.parentTitle_id).split('/')[2] : null,
            has_watched: false,
            watched_time: null,
            user_rating: 0,
            listOpen: false,
            currentList: null,
            available_on: (this.props.selected.available_on) ? this.props.selected.available_on : [],
            seasons: (this.props.selected.season) ? this.props.selected.season.map(el => el.season) : null,
            episodes: (this.props.selected.season) ? this.props.selected.season.map(el => el.episodes) : null,
            user_episodes: (this.props.selected.userEpisodes) ? this.props.selected.userEpisodes : null,
            user_shows: (this.props.selected.userShows) ? this.props.selected.userShows : null,
            user_movies: (this.props.selected.userMovies) ? this.props.selected.userMovies : null,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selected !== this.props.selected) {
            this.setState({
                imdb_id: this.props.selected.imdb_id,
                title: this.props.selected.title,
                year: this.props.selected.year,
                titleType: this.props.selected.titleType,
                image: this.props.selected.image,
                runTime: this.props.selected.runTime,
                certificate: this.props.selected.certificate,
                ratings: this.props.selected.ratings,
                genres: this.props.selected.genres,
                releaseDate: this.props.selected.releaseDate,
                summary: this.props.selected.summary,
                outline: this.props.selected.outline,
                parentTitle_id: (this.props.selected.parentTitle_id) ? (this.props.selected.parentTitle_id).split('/')[2] : null,
                user_episodes: (this.props.selected.userEpisodes) ? this.props.selected.userEpisodes : null,
                user_shows: (this.props.selected.userShows) ? this.props.selected.userShows : null,
                user_movies: (this.props.selected.userMovies) ? this.props.selected.userMovies : null,
                available_on: (this.props.selected.available_on) ? this.props.selected.available_on : [],
            })
            this.toggleWatch()
        }
        // console.log('prevProps', prevProps)
        // console.log('THIS', this.props)
    }

    componentDidMount() {
        if (this.props.selected) {
            this.setState({
                dataLoaded: true,
            })
        }
    }

    handleClickOutside() {
        this.setState({
            listOpen: false
        })
    }
    toggleList(current) {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen,
            currentList: current,
        }))
    }

    // CREDITS FOR THE DROP DOWN GO TO Doğacan Bilgili 
    // https://blog.logrocket.com/building-a-custom-dropdown-menu-component-for-react-e94f02ced4a1/


    seasonsAndEpisodes() {
        return this.state.seasons.map((el, i) => {
            return (
                <li key={i} className="season-group">
                    <div className="dd-wrapper">
                        <div className="dd-header" onClick={() => this.toggleList(el)}>
                            <div className="dd-header-title">Season: {el}</div>
                            {(this.state.listOpen && el === this.state.currentList)
                                ? <div className="expand-episodes"><p>Click to see episodes <span>⬆</span></p></div>
                                : <div className="collapse-episodes"><p>Click to close <span>⬇</span></p></div>
                            }
                        </div>
                        {this.state.listOpen && <ul className="dd-list">
                            {this.state.episodes.map(episode => {
                                return episode.map(eps => {
                                    if (eps.season === el && eps.season === this.state.currentList) {
                                        let url = eps.id.split('/')[2]
                                        return (
                                            <li className="dd-list-item" key={eps.id} onClick={() => { this.props.selectedPoster(url) }} >Ep: {eps.episode} {eps.title}</li>
                                        )
                                    } else {
                                        return <li></li>
                                    }
                                })

                            })}
                        </ul>}
                    </div>
                </li>
            )
        })
    }

    handleChange(e) {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        this.setState({
            [name]: value,
        })
    }

    toggleWatch() {
        if (this.props.user) {
            if (this.state.titleType === 'movie') {
                if (this.state.user_movies) {
                    let movieCheck = this.state.user_movies.find(movie => (movie.imdb_id === this.state.imdb_id))
                    if (movieCheck) {
                        return (
                            <form onSubmit={(evt) => (this.props.handleUsersInputSubmit(evt, this.state.has_watched, this.state.user_rating, this.state.titleType, this.state.imdb_id, movieCheck))}>
                                <p>Your Rating: {movieCheck.ratings}</p>
                                <input type='range' name='user_rating' min='0' max='10' value={this.state.user_rating} onChange={this.handleChange} />

                                {(movieCheck.has_watched && this.state.dataLoaded) ? <p>{movieCheck.watched_time}</p> : <input type='radio' name='has_watched' onChange={this.handleChange} />}
                                <input type='submit' value='Save Input' />
                            </form>
                        )
                    } else {
                        return (
                            <form className="form-box" onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                                <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                            </form>
                        )
                    }
                } else {
                    return (
                        <form className="form-box" onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                            <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                        </form>
                    )
                }
            } else if (this.state.titleType === 'tvSeries') {
                if (this.state.user_shows) {
                    let showCheck = this.state.user_shows.find(show => (show.imdb_id === this.state.imdb_id))
                    if (showCheck) {
                        return (
                            <form onSubmit={(evt) => (this.props.handleUsersInputSubmit(evt, this.state.has_watched, this.state.user_rating, this.state.titleType, this.state.imdb_id, showCheck))}>
                                <p>Your Rating: {showCheck.ratings}</p>
                                <input type='range' name='user_rating' min='0' max='10' value={this.state.user_rating} onChange={this.handleChange} />
                                {(showCheck.has_watched) ? <p>{showCheck.watched_time}</p> : <input type='radio' name='has_watched' onChange={this.handleChange} />}
                                <input type='submit' value='Save Input' />
                            </form>
                        )
                    } else {
                        return (
                            <form className="form-box" onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                                <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                            </form>
                        )
                    }
                } else {
                    return (
                        <form className="form-box" onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                            <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                        </form>
                    )
                }
            } else if (this.state.titleType === 'tvEpisode') {
                if (this.state.user_episodes) {
                    let episodeCheck = this.state.user_episodes.find(episode => (episode.imdb_id === this.state.imdb_id))
                    if (episodeCheck) {
                        return (
                            <form onSubmit={(evt) => (this.props.handleUsersInputSubmit(evt, this.state.has_watched, this.state.user_rating, this.state.titleType, this.state.imdb_id, episodeCheck))}>
                                <p>Your Rating: {episodeCheck.ratings}</p>
                                <input type='range' name='user_rating' min='0' max='10' value={this.state.user_rating} onChange={this.handleChange} />
                                {(episodeCheck.has_watched) ? <p>{episodeCheck.watched_time}</p> : <input type='radio' name='has_watched' onChange={this.handleChange} />}
                                <input type='submit' value='Save Input' />
                            </form>
                        )
                    } else {
                        return (
                            <form className="form-box" onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                                <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                            </form>
                        )
                    }
                } else {
                    return (
                        <form className="form-box" onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                            <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                        </form>
                    )
                }
            }
        } else {
            return (
                <form className="form-box" onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                    <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                </form>
            )
        }
    }

    conditionalRender() {
        return (
            <div>
                <section className="show-page">
                    <aside className="image-box">
                        <img alt='Movie/Show Poster' src={(this.props.selected) ? this.state.image : "https://images.pexels.com/photos/3150553/pexels-photo-3150553.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} />
                    </aside>
                    <div className="info-box">
                        <article className="detail-info">
                            <h1>
                                {this.state.title}({this.state.year})
                            </h1>
                            <div className='summary'>
                                <h2>
                                    Summary
                                </h2>
                                {(this.state.summary && this.state.outline)
                                    ?
                                    <div>
                                        {this.state.summary.text}
                                        <cite>{this.state.summary.author}</cite>
                                    </div>
                                    : (!this.state.summary && this.state.outline)
                                        ?
                                        <div>
                                            {(this.state.outline)}
                                        </div>
                                        : 'Unavailable'}
                            </div>
                            <div className="info">
                                <h4><em>Run Time:</em>{this.state.runTime}</h4>
                                <h4><em>Rating:</em>{(this.state.certificate) ? this.state.certificate.US.map(el => el.certificate) : 'Unavailable'}</h4>
                                <h4>{/* ratingReasons are possible */}</h4>
                                <h4><em>Release Date:</em>{this.state.releaseDate}</h4>
                                <h4><em>Genres:</em>{this.state.genres.map((el, i) => <span key={i}> •{el} </span>)}</h4>
                                {(this.props.selected) ? this.toggleWatch() : <p>Loading...</p>}
                            </div>
                        </article>
                    </div>
                </section>
                <section className="show-page2">
                    <article className="seasons-episodes-box">
                        {(this.state.titleType === 'tvEpisode') ? <span onClick={() => { this.props.selectedPoster(this.state.parentTitle_id) }}>Back to the Main Page</span> : <span></span>}
                        <ul className="single-season">
                            {(this.props.selected.season) ? this.seasonsAndEpisodes() : null}
                        </ul>
                    </article>
                    <article className="where-to-watch">
                        {(this.state.available_on.length > 0) ? this.state.available_on.map(el => {
                            return (
                                <div key={el.id}>
                                    <div className="logo-box">
                                        <img src={el.icon} alt="Provider's Icon" />
                                    </div>
                                    <h3>{el.display_name}</h3>
                                    <a href={el.url} target='_blank' rel="noopener noreferrer">Watch on {el.display_name} NOW!</a>
                                </div>
                            )
                        }) : null}
                    </article>
                </section>
            </div>
        )
    }
    render() {
        return (
            <div className="decide">
                {(this.state.dataLoaded) ? this.conditionalRender() : <p>Loading your Results...</p>}
            </div>
        )
    }
}
