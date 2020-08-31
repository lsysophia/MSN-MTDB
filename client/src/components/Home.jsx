import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Search from './Search'

export default class Home extends Component {
    render() {
        return (
            <div className="Home-page">
                <div>
                    <h1>Welcome to MSNMTVDB</h1>
                </div>
                <div className="user-box">
                    <h3><Link to='/login'>Login</Link></h3>
                    <h3><Link to='/register'>Register</Link></h3>
                </div>
                <div>
                    <h3>Search Page</h3>
                </div>
            </div>
        )
    }
}
