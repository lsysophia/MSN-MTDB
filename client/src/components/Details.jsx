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
            available_on: (this.props.selected.available_on) ? this.props.selected.available_on : [],
            seasons: (this.props.selected.season) ? this.props.selected.season.map(el => el.season) : null,
            episodes: (this.props.selected.season) ? this.props.selected.season.map(el => el.episodes) : null,
        }
    }

    componentDidMount() {
        if (this.props.selected) {
            this.setState({
                dataLoaded: true,
            })
        }
    }

    seasonsAndEpisodes() {
        return this.state.seasons.map((el, i) => {
            return (
                <li key={i}>
                    {el}
                    <ul>
                        {this.state.episodes.map(elem => {
                            return elem.map(ele => {
                                if (ele.season === el) {
                                    return (
                                        <li key={ele.id} onClick={() => { this.props.selectedPoster((ele.id).split('/')[0]) }} >{(ele.season === el) ? `Ep: ${ele.episode} Title: ${ele.title}` : null}</li>
                                    )
                                }
                            })
                        })}
                    </ul>
                </li>
            )
        })
    }

    conditionalRender() {
        return (
            <section className="show-page">
                <article>
                    <div className="image-box">
                        <img alt='Movie/Show Poster' src={(this.props.selected) ? this.state.image : "https://images.pexels.com/photos/3150553/pexels-photo-3150553.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} width="300px" />
                    </div>
                    <div className="detail-info">
                        <h1>
                            {this.state.title}({this.state.year})
                        </h1>
                        <div>
                            <h4>Run Time: {this.state.runTime}</h4>
                            <h4>Rating: {(this.state.certificate) ? this.state.certificate.US.map(el => el.certificate) : 'Unavailable'}</h4>
                            <h4>{/* ratingReasons are possible */}</h4>
                            <h4>Release Date: {this.state.releaseDate}</h4>
                            <h4>Genres: {this.state.genres.map((el, i) => <span key={i}>{el}</span>)}</h4>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="ratings-box">
                        <h3>Ratings</h3>
                        <p>{this.state.ratings}</p>
                    </div>
                    <form onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                        <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                    </form>
                </article>
                <article className="seasons-episodes-box">
                    <ul>
                        {(this.props.selected.season) ? this.seasonsAndEpisodes() : null}
                    </ul>
                </article>
                <article>
                    <div className='summary'>
                        <h3>
                            Summary
                        </h3>
                        {this.state.summary ? <div>
                            <p>{this.state.summary.text}</p>
                            <cite>{this.state.summary.author}</cite>
                        </div> : 'Unavailable'}
                        <div>
                            {(this.state.outline) ? this.state.outline : 'Unavailable'}
                        </div>
                    </div>
                    <div className="where-to-watch">
                        {(this.state.available_on.length > 0) ? this.state.available_on.map(el => {
                            return (
                                <div key={el.id}>
                                    <img src={el.icon} alt="Provider's Icon" />
                                    <h3>{el.display_name}</h3>
                                    <a href={el.url} target='_blank' rel="noopener noreferrer">Watch: {this.state.title} on {el.display_name} NOW!</a>
                                </div>
                            )
                        }) : null}
                    </div>
                </article>
            </section >
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
