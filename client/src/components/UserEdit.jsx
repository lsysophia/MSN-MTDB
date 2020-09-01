import React from 'react'

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
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
            <div>
                <form className="form-box" onSubmit={(e) => this.props.handleUpdates(e, this.state.id)}>
                    <input type="email"
                        name="email"
                        value={this.state.email}
                        placeholder={this.props.email}
                        onChange={this.handleInputChange}
                    />
                    <input type="number"
                        name="age"
                        value={this.state.age}
                        placeholder={this.props.age}
                        onChange={this.handleInputChange}
                    />
                    <input type="text"
                        name="genres"
                        value={this.state.genres}
                        placeholder={this.props.genres}
                        onChange={this.handleInputChange}
                    />
                    <input type="text"
                        name="name"
                        value={this.state.name}
                        placeholder={this.props.name}
                        onChange={this.handleInputChange}
                    />
                </form>
            </div>
        )
    }

}