import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class User extends Component {
    render() {
        return (
            <div>
                <div className="user-page">
                    <section>
                        <h2>Username</h2>
                    </section>
                    <aside>
                        <h2>User's saved movie list</h2>
                        <div className="user-saved-list">
                            List comes here
                    </div>
                    </aside>
                </div>
                <div className="user-settings">
                    <h4>Log out</h4>
                    <h4><Link to='/user/edit'>Edit Info</Link></h4>
                    <h4 onClick={() => { this.props.deleteUser(this.props.user.id) }}>Delete Account</h4>
                </div>
            </div>

        )
    }
}
