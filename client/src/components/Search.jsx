import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }
    render() {
        return (
            <div className="search-page">
                <div className="search-box">
                    <input type="text" name="title" placeholder="Search by Title" />
                    <input type="submit" value="Submit" />
                </div>
                <div className="search-results">
                    <ul>
                        <li>Result 1  </li>
                        <li>Result 2 </li>
                        <li>Result 3 </li>
                        <li>Result 4</li>
                        <li>Result 5</li>
                        <li>Result 6  </li>
                        <li>Result 7 </li>
                        <li>Result 8 </li>
                        <li>Result 9</li>
                        <li>Result 10</li>
                    </ul>
                </div>
            </div>
        )
    }
}
