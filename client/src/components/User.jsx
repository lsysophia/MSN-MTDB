import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
    constructor(props) {
        super(props) 
        this.setState={
            watchlist: [], 
        }
        this.getWatchList = this.getWatchList.bind(this)
    }

    getWatchList() {
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
            // this.setState({
            //     watchlist: console.log(parsedRes.data.userMovies)
            // })
        })
    }


    render() {
        return (
            <div>
                <div className="user-page">
                    <section>
                        <h2>{this.props.user.username}</h2>
                    </section>
                    <aside>
                        <h2>User's saved movie list</h2>
                        <div className="user-saved-list">
                            { this.props.auth 
                            ? 
                            this.getWatchList()
                            : 
                            <h3>Add some movies to your list!</h3>
                            }
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
