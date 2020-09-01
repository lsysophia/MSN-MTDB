import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <a><Link to="/">MSN - MTDB</Link></a>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user">Profile</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li onClick={() => { this.props.logout() }}>Logout</li>
                    </ul>
                    {/* Will use ternary here when we have Auth function working*/}
                </nav>
            </header>
        )
    }
}
