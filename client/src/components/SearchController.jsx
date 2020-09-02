import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Search from './Search'
import SearchResults from './SearchResults';

export default class SearchController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            pageStatus: 'initial',
            dataLoaded: false,
            selected: null,
            list: [],
            title: '',
            results: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
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

    componentDidMount() {
        if (this.state.pageStatus === 'initial') {
            this.setState({
                dataLoaded: true,
            })
        } else if (this.state.pageStatus === 'results') {
            this.setState({
                dataLoaded: true,
            })
        }
    }

    conditionalRender() {
        switch (this.state.pageStatus) {
            case 'initial':
                return <Search handleSearchSubmit={this.handleSearchSubmit} handleInputChange={this.handleInputChange} list={this.state.list} />
            case 'results':
                return <SearchResults handleSearchSubmit={this.handleSearchSubmit} handleInputChange={this.handleInputChange} selectedPoster={this.props.selectedPoster} results={this.state.results} />
            default:
                return <Redirect push to='/search' />
        }
    }

    render() {
        return (
            <div className="search-page">
                {(this.state.dataLoaded) ? this.conditionalRender() : <p>Page Loading...</p>}
                {/* {this.state.fireRed irect && <Redirect push to={this.state.redirectPath} />} */}
            </div>
        )
    }
}
