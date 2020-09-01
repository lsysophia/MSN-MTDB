import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
    render() {
        return (
            <div className="user-page">
                <section>
                    <h2>Username</h2>
                    <div className="user-settings">
                        <p onClick={() => { this.props.logout() }}>Log out</p>
                        <p><Link to='/user/edit'>Edit Info</Link></p>
                        <p onClick={() => {this.props.deleteUser(this.props.user.id)}}>Delete Account</p>
                    </div>
                </section>

                <aside>
                    <h2>User's saved movie list</h2>
                    <div>
                        List comes here
                    </div>
                </aside>

            </div>
        )
    }
}
