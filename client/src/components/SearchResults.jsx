import React, { Component } from 'react'

export default class SearchResults extends Component {
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
                    <ul>
                        {this.props.results.map(el => {
                            return <li key={el.imdb_id}>
                                <div onClick={() => {this.props.selectedPoster(el.imdb_id) }} className='posterDiv'>
                                    <img src={el.posters} alt='Movie/Show Poster' />
                                    <h3>{el.title}({el.years})</h3>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}