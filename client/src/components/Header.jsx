import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <Link to="/">MSN - MTDB</Link>
                </div>
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/search"><li>Search</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        {this.props.userAuth
                            ?
                            <ul>
                                <Link to="/user"><li>Profile</li></Link>
                                <li className="logout-click" onClick={() => { this.props.logout() }}>Logout</li>
                            </ul>
                            : <Link to='/login'><li>Login</li></Link>}
                    </ul>
                </nav>
            </header>
        )
    }
}
