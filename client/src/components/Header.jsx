import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                    MSN - MTDB
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="">Profile</Link></li>
                        <li><Link to="">Search</Link></li>
                        <li><Link to="">About</Link></li>
                    </ul>
                    {/* Will use ternary here when we have Auth function working*/}
                </nav>
            </header>
        )
    }
}
