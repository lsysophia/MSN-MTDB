import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataloaded: false,
            watchlist: null,
        }
        this.renderWatchList = this.renderWatchList.bind(this)
    }

    componentDidMount() {
        this.props.getUserContent()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.watchList.data !== this.state.watchlist) {
            this.setState({
                dataloaded: true,
                watchlist: this.props.watchList.data,
            })
        }
    }

    renderWatchList() {
        return <ul>
            <h3 className="titles">Movies</h3>
            {this.state.watchlist.userMovies.map(eachMovie => {
                return <li key={eachMovie.imdb_id}>
                <h3 onClick={() => { this.props.selectedTitle(eachMovie.imdb_id) }} >{eachMovie.title}</h3>
                <p onClick={() => {this.props.deleteFromWatch(eachMovie.imdb_id, 'movie')}}>X</p>
                </li>
            })}
            <h3 className="titles">Shows</h3>
            {this.state.watchlist.userSeries.map(eachSeries => {
                return <li key={eachSeries.imdb_id}>
                <h3 onClick={() => { this.props.selectedTitle(eachSeries.imdb_id) }} >{eachSeries.title}</h3>
                <p onClick={() => {this.props.deleteFromWatch(eachSeries.imdb_id, 'tvSeries')}}>X</p>
                </li>
            })}
            <h3 className="titles">Episodes</h3>
            {this.state.watchlist.userEpisodes.map(eachEpisode => {
                return <li key={eachEpisode.imdb_id}>
                    <h3 onClick={() => { this.props.selectedTitle(eachEpisode.imdb_id) }} >{eachEpisode.title}</h3>
                    <p onClick={() => {this.props.deleteFromWatch(eachEpisode.imdb_id, 'tvEpisodes')}}>X</p>
                    </li>
            })}
        </ul>
    }

    render() {
        return (
            <div>
                <div className="user-page">
                    <section>
                        <h2>Welcome: {this.props.user.username}</h2>
                        <div className="user-info">
                            <p><em>Name</em>:  {this.props.user.name}</p>
                            <p><em>Email</em>: {this.props.user.email}</p>
                            <p><em>Age</em>:   {this.props.user.age}</p>
                            <p><em>Preferred Genres</em>: {this.props.user.genres}</p>
                        </div>
                    </section>
                    <aside>
                        <h2>User's saved watchlist</h2>
                        <div className="user-saved-list">
                            {(this.state.dataloaded && this.props.watchList) ?
                                this.renderWatchList()
                                : <li>No Content</li>}
                        </div>
                    </aside>
                </div>
                <div className="user-settings">
                    <h4 onClick={() => { this.props.logout() }}>Log out</h4>
                    <h4><Link to='/user/edit'>Edit Info</Link></h4>
                    <h4 onClick={() => { this.props.deleteUser(this.props.user.id) }}>Delete Account</h4>
                </div>
            </div>
        )
    }
}
