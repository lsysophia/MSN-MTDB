import React, { Component } from 'react'


import { Link, Redirect } from 'react-router-dom'

export default class MsnController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.currentPage,
            dataLoaded: false,
            fireRedirect: false,
        }
        // Binding comes here
    }
    componentDidMount() {
        console.log('component loaded')
    }

    decideWhichToRender() {
        switch (this.state.currentPage) {
            case 'index':
                return;
            case 'about':
                return;
            case 'user':
                return;
            case 'search':
                return;
            case 'show':
                return;
        }
    }
    render() {
        return (
            <div className="container">
                {/* {(this.state.dataLoaded) ? this.decideWhichToRender() : <p>Loading....</p>} */}

            </div>
        )
    }
}
