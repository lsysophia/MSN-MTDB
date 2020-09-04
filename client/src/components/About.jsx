import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <article className="about-box">
                <h1>MSN - MTDB</h1>
                <p className="about">
                    Welcome to our web-app! This is a platform where you would be able to search for movies and tv shows that you have in mind, keep track of what you have watched and what you want to watch,
                    submit your own ratings for each title, and most importantly, you'll be able to know on which platform you can watch it without jumping through all the hoops that is the search engine!
                    We hope you like this app!
                    </p><br></br>
                <p>
                    If you would like to try out app out, please go to our <Link to='/search'>Search Page</Link>. Clicking on any of the search results will take you to a detail page of that result.
                        You'll find more info about the title and where you can watch it.
                    </p><br></br>
                <p>
                    If you would like to register in order to enjoy the full function of our application, please register <Link to='/register'>Here</Link>
                </p><br></br>
                <h2>How to use this app</h2>
                <p>
                    MSN - MTDB is an app where users can do search about Movies and TV shows, add them to their watchlist and rate them.
                    </p>
                <h2>Search Functionality</h2>
                <p>
                    You can search by movie and tv show titles.
                    Initial landing on the search page will display movies, tv shows, and show episodes that users across the platform have saved.
                    Show pages for an individual title will provide more detailed information with the movie poster, plot summary, release date, rating, genres. Links to streaming services available for that specific title.
                </p><br></br>


                <h2>Technologies used for this project</h2>
                <div className="center">
                    <ul>
                        <li><span role="img" aria-label="tech">• Express JS</span></li>
                        <li><span role="img" aria-label="tech">• React</span></li>
                        <li><span role="img" aria-label="tech">• PSQL</span></li>
                        <li><span role="img" aria-label="tech">• CSS</span></li>
                    </ul>
                </div>
                <h2>Team</h2>
                <h3><span role="img" aria-label="dream">💭</span> Dream team <span role="img" aria-label="dream">💭</span></h3>
                <div className="center">
                    <ul>
                        <li><span role="img" aria-label="fire">💥</span><a href="https://github.com/Schlaffmatthewj" target="_blank" rel="noopener noreferrer">Matthew</a></li>
                        <li><span role="img" aria-label="fire">💥</span><a href="https://github.com/lsysophia" target="_blank" rel="noopener noreferrer">Sophia</a></li>
                        <li><span role="img" aria-label="fire">💥</span><a href="https://github.com/nisozakuto/" target="_blank" rel="noopener noreferrer">Niso</a></li>
                    </ul>
                </div>
            </article>
        )
    }
}