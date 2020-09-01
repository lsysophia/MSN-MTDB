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
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/about">About</Link></li>
                        {/* TEMP */}
                        <li><Link to ="/show">Show</Link></li>
                        {/* TEMP */}
                        {this.props.userAuth
                        ?
                        <ul> 
                            <li><Link to="/user">Profile</Link></li> 
                            <li className="logout-click" onClick={() => { this.props.logout() }}>Logout</li>
                        </ul>
                        : <li><Link to='/login'>Login</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}
