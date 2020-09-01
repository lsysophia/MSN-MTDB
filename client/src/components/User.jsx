import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div className="user-page">
                <section>
                    <h2>Username</h2>
                    <div className="user-settings">
                        <p>Log out</p>
                        <p>Edit User</p>
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
