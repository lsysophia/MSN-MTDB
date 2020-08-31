import React, { Component } from 'react'

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
                <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)} >
                    <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.handleInputChange} />
                    <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.handleInputChange} />
                    <input type="submit" value="Log in!" />
                </form>
            </div>
        )
    }
}