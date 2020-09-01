import React, { Component } from 'react'

export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        }
    }
    render() {
        return (
            // may need a component did mount
            <section className="show-page">
                <article>
                    <div>
                        <img src={(this.props.selected) ? this.state.image : "https://images.pexels.com/photos/3150553/pexels-photo-3150553.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} width="300px" />
                    </div>
                    <div>
                        <h1>
                            {this.state.title}({this.state.year})
                        </h1>
                        <div>
                            Run Time: {this.state.runTime}
                            Rating: {this.state.certificate.US.map(el => el.certificate)}
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
                    <input type="submit" value="Add to watchlist" className="add-wathclist-button" />
                </article>
                <article>
                    <div>
                        <h3>
                            Summary
                        </h3>
                        <div>
                            {this.state.summary.text}
                            <cite>{this.state.summary.author}</cite>
                        </div>
                        <div>
                            {this.state.outline}
                        </div>
                    </div>
                    <div>
                        <h2>
                            Watch it at: .....
                        </h2>
                        <p><a>Click here to watch</a></p>
                    </div>
                </article>
            </section>
        )
    }
}
