import React, { Component } from 'react'

class UserEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: props.user.email, 
            age: props.user.age, 
            genres: props.user.genres,
            name: props.user.name,
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
            <div>
                <form className="form-box" onSubmit={(e) => this.props.handleUserEditSubmit(e, this.state, this.props.user.id)}>
                    <input type="text"
                        name="name"
                        value={this.state.name}
                        placeholder='Name'
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="email"
                        name="email"
                        value={this.state.email}
                        placeholder='Email'
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="number"
                        name="age"
                        value={this.state.age}
                        placeholder='Age'
                        onChange={this.handleInputChange}
                        required
                    />
                    <input type="text"
                        name="genres"
                        value={this.state.genres}
                        placeholder='Genres'
                        onChange={this.handleInputChange}
                    />
                    <input type="submit"
                        value="Finish Editing"
                    />
                </form>
            </div>
        )
    }

}

export default UserEdit