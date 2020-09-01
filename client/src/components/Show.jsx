import React, { Component } from 'react'

export default class Show extends Component {
    render() {
        return (
            <div className="show-page">
                <div>
                    <article>
                        <div>
                            <img src="https://images.pexels.com/photos/3150553/pexels-photo-3150553.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" width="300px" />
                        </div>
                        <div>
                            <h1>
                                Title (Year)
                                {this.props.selected.title}
                            </h1>
                            <h3>
                                Meta data
                            </h3>
                        </div>
                    </article>
                    <article>
                        <input type="submit" value="Addt to watchlist" className="add-wathclist-button" />
                    </article>
                    <article>
                        <div>
                            <h3>
                                Details and Descriptions
                        </h3>
                        </div>
                        <div>
                            <h2>
                                Watch it at: .....
                            </h2>
                            <p><a>Click here to watch</a></p>
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
