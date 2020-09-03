import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <div>
                    <h1>Welcome to MSN - MTVDB</h1>
                </div>
                {this.props.userAuth
                    ?
                    <div className="user-box">
                        <h3><Link to="/search">Search Page</Link></h3>
                    </div>
                    :
                    <div>
                        <div className="user-box">
                            <h3><Link to='/login'>Login</Link></h3>
                            <h3><Link to='/register'>Register</Link></h3>
                        </div>
                        <div className="user-box">
                            <h3><Link to="/search">Search Page</Link></h3>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
