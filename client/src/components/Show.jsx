import React, { Component } from 'react'

export default class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imdb_id: this.props.selected.imdb_id,
            title: this.props.selected.title,
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
            <div className="show-page">
                <div>
                    <article>
                        <div>
                            <img src={(this.props.selected) ? this.props.selected.image : "https://images.pexels.com/photos/3150553/pexels-photo-3150553.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"} width="300px" />
                        </div>
                        <div>
                            <h1>
                                title(year)
                                {console.log(this.state)}
                            </h1>
                            <h3>
                                Meta data
                            </h3>
                        </div>
                    </article>
                    <article>
                        <input type="submit" value="Addt to watchlist" className="add-wathclist-button" />
                    </article>
                    <article>
                        <div>
                            <h3>
                                Details and Descriptions
                        </h3>
                        </div>
                        <div>
                            <h2>
                                Watch it at: .....
                            </h2>
                            <p><a>Click here to watch</a></p>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
