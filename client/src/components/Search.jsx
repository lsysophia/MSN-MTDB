import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            shows: [],
            episodes: [],
            dataLoaded: false,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.list !== this.props.list) {
            this.setState({
                movies: this.props.list.movies,
                shows: this.props.list.shows,
                episodes: this.props.list.episodes,
                dataLoaded: true,
            })
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         dataLoaded: true,
    //     })
    // }

    conditionalRender() {
        return (
            <ul>
                <h3 className="search-titles">Movies</h3>
                {(this.state.movies.length > 0) ? this.state.movies.map(el => <li onClick={() => { this.props.selectedPoster(el.imdb_id) }} key={el.imdb_id}>• {el.title}</li>) : <li>No Movies</li>}
                <h3 className="search-titles">Shows</h3>
                {(this.state.shows.length > 0) ? this.state.shows.map(el => <li onClick={() => { this.props.selectedPoster(el.imdb_id) }} key={el.imdb_id}>• {el.title}</li>) : <li>No Shows</li>}
                <h3 className="search-titles">Episodes</h3>
                {(this.state.episodes.length > 0) ? this.state.episodes.map(el => <li onClick={() => { this.props.selectedPoster(el.imdb_id) }} key={el.imdb_id}>• {el.title}</li>) : <li>No Episodes</li>}
                {console.log(this.state)}
                {/* {this.state.list.movies.map(el => <li key={el.id}>{el.title}</li>)} */}
            </ul>
        )
    }

    render() {
        return (
            <div className="search-page">
                <div className="search-box">
                    <form onSubmit={(e) => this.props.handleSearchSubmit(e)}>
                        <input type="text" name="title" placeholder="Search by Title" onChange={this.props.handleInputChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="search-results">
                    {this.conditionalRender()}
                </div>
            </div>
        )
    }
}