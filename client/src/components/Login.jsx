import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form className="form-box" onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)} >
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                    <input type="submit" value="Log in!" />
                </form>
                {/* <div className="user-box">
                    <h3><Link to='/register'>Register</Link></h3>
                </div> */}
            </div>
        )
    }
}