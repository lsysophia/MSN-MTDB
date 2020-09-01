import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageStatus: 'initial',
            list: [],
            title: '',
            results: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSearchSubmit =this.handleSearchSubmit.bind(this)
    }

    handleInputChange(e) {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        this.setState({
            [name]: value,
        })
    }
    handleSearchSubmit(evt) {
        evt.preventDefault()
        fetch(`api/search/${this.state.title}`, {
            method: 'POST',
        })
        .then(res => res.json())
        .then(jsonRes => {
            this.setState({
                results: jsonRes.data.results,
                pageStatus: 'results'
            })
        })
        .catch(err => console.log(err))
    }

    conditionalRender() {
        if (this.state.pageStatus === 'initial') {
            if (this.state.list.length === 0) {
                return <li>Loading Movies &amp; Shows</li>
            } else {
                return this.state.list.map(el => {
                    return <li key={el.id}>{el.title}</li>
                })
            }
        } else if (this.state.pageStatus === 'results') {
            return this.state.results.map(el => {
                return <li key={el.imdb_id}>
                        <div onClick={() => {this.props.selectedPoster(el.imdb_id)}} className='posterDiv'>
                            <img src={el.posters} />
                            <h3>{el.title}({el.years})</h3>
                        </div>
                    </li>
            })
        }
    }

    render() {
        return (
            <div className="search-page">
                <div className="search-box">
                    <form onSubmit={(e) => this.handleSearchSubmit(e)}>
                        <input type="text" name="title" placeholder="Search by Title" onChange={this.handleInputChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="search-results">
                    <ul>
                        {this.conditionalRender()}
                    </ul>
                </div>
            </div>
        )
    }
}
