import React, { Component } from 'react'
import { Router } from 'express'
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
            //is_movie saved in this users account?
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    componentDidMount() {
        console.log('ComponentMounted', "imdbID", this.props.selected.imdb_id)
        this.setState({
            dataLoaded: true,
        })
        console.log('ComponentMounted', "imdbID", this.state.imdb_id)
    }

    conditionalRender() {
        return (
            <section className="show-page">
                <article>
                    <div>
                        <img alt='Movie/Show Poster' src={(this.props.selected) ? this.state.image : "https://images.pexels.com/photos/3150553/pexels-photo-3150553.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} width="300px" />
                    </div>
                    <div>
                        <h1>
                            {this.state.title}({this.state.year})
                        </h1>
                        <div>
                            Run Time: {this.state.runTime}
                            Rating: {(this.state.certificate) ? this.state.certificate.US.map(el => el.certificate) : 'Unavailable'}
                            {/* ratingReasons are possible */}
                            Release Date: {this.state.releaseDate}
                            Genres: {this.state.genres.map((el, i) => <span key={i}>{el}</span>)}
                        </div>
                    </div>
                </article>
                <article>
                    <div>
                        <h3>Ratings</h3>
                        <p>{this.state.ratings}</p>
                    </div>
                    <form onSubmit={(evt) => (this.props.handleFormSubmit(evt, this.state))} >
                        <input type="submit" value="Add to watchlist" className="add-watchlist-button" />
                    </form>
                </article>
                <article>
                    <div>
                        <h3>
                            Summary
                        </h3>
                        {this.state.summary ? <div>
                            {this.state.summary.text}
                            <cite>{this.state.summary.author}</cite>
                        </div> : 'Unavailable'}
                        <div>
                            {(this.state.outline) ? this.state.outline : 'Unavailable'}
                        </div>
                    </div>
                    <div>
                        <h2>
                            Watch it at: .....
                        </h2>
                        <p><a href='/'>Click here to watch</a></p>
                    </div>
                </article>
            </section >
        )
    }
    render() {
        return (
            <div>
                {(this.state.dataLoaded) ? this.conditionalRender() : <p>Loading your Results...</p>}
            </div>
        )
    }
}
