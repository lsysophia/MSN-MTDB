import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
            age: '',
            genres: '',
            name: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="form-box">
                <form className="column-flex" onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
                    <input type="text"
                        name="username"
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="password"
                        name="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="number"
                        name="age"
                        value={this.state.age}
                        placeholder="Age"
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="text"
                        name="genres"
                        value={this.state.genres}
                        placeholder="Genres"
                        onChange={this.handleInputChange}
                    />
                    <input type="submit"
                        value="Register"
                    />
                </form>
            </div>
        )
    }
}

export default Register