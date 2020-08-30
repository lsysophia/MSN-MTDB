import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div className="user-page">
                <section>
                    <h3>Username</h3>

                    <div className="user-settings">
                        <p>Log out</p>
                        <p>Edit User</p>
                    </div>

                </section>

                <aside>
                    <h1>User's saved movie list</h1>
                    <div>
                        List comes here
                    </div>
                </aside>

            </div>
        )
    }
}
