import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
    constructor(props) {
        super(props) 
        this.setState={
            watchlist: null, 
        }
        // this.chooseToRender = this.chooseToRender.bind(this)
    }

    componentDidMount() {
        console.log(this.props.user)
        fetch(`/api/user/${this.props.user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes)
            this.setState({
                watchlist: parsedRes.data,
            })
        }).catch(err => console.log(err))
    }

    // chooseToRender() {
    //     if (this.state.watchlist.userEpisodes.length > 0) {
    //         this.state.watchlist.userEpisodes.map(eachEpisode => {
    //             console.log(eachEpisode)
    //             return eachEpisode.title
    //         })
    //     } if (this.state.watchlist.userMovies.length > 0) {
    //         this.state.watchlist.userMovies.map(eachMovie => {
    //             return eachMovie.title
    //         })
    //     } if (this.state.watchlist.userSeries.length > 0) {
    //         this.state.watchlist.userSeries.map(eachSeries => {
    //             return eachSeries.title
    //         })
    //     } else {

    //     }
    // }

    render() {
        return (
            <div>
                <div className="user-page">
                    <section>
                        <h2>{this.props.user.username}</h2>
                        <div className="user-info">
                            <p>Name: {this.props.user.name}</p>
                            <p>Email: {this.props.user.email}</p>
                            <p>Age: {this.props.user.age}</p>
                            <p>Preferred Genres: {this.props.user.genres}</p>
                        </div>
                    </section>
                    <aside>
                        <h2>User's saved watchlist</h2>
                        <div className="user-saved-list">
                            <ul>
                                { (!this.state.watchlist) ?
                                    <h3>Your list is empty. Go add something!</h3>
                                    : (this.state.watchlist.userEpisodes.length > 0) ?
                                    this.state.watchlist.userEpisodes.map(eachEpisode => {
                                        return <li key={eachEpisode.id}>{eachEpisode.title}</li>
                                    })
                                    : (this.state.watchlist.userMovies.length > 0) ?
                                    this.state.watchlist.userMovies.map(eachMovie => {
                                        return <li key={eachMovie.id}>{eachMovie.title}</li>
                                    })
                                    : (this.state.watchlist.userSeries.length > 0) ?
                                    this.state.watchlist.userSeries.map(eachSeries => {
                                        return <li key={eachSeries.id}>{eachSeries.title}</li>
                                    })
                                    : null
                                }
                            </ul>
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
