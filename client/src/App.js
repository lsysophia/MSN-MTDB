import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import fetch from 'node-fetch';

import './App.css';
import Header from './components/Header'
import User from './components/User'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/About'
import SearchController from './components/SearchController'
import UserEdit from './components/UserEdit'
import Details from './components/Details'
class App extends Component {
  constructor() {
    super()
    this.state = {
      selected: null,
      auth: false,
      user: null,
      fireRedirect: false,
      redirectPath: null,
      watchList: [],
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.handleUserEditSubmit = this.handleUserEditSubmit.bind(this)
    this.selectedPoster = this.selectedPoster.bind(this)
    this.toggleLoginRegister = this.toggleLoginRegister.bind(this)
    this.handleUsersInputSubmit = this.handleUsersInputSubmit.bind(this)
    this.deleteFromWatch = this.deleteFromWatch.bind(this)
    this.getUserContent = this.getUserContent.bind(this)
  }

  componentDidMount() {
    fetch('/api/auth/verify', { credentials: 'include' })
      .then(res => res.json())
      .then(parsedRes => {
        this.setState({
          auth: parsedRes.auth,
          user: parsedRes.data.user,
        })
      }).catch(err => console.log(err))
  }

  handleLoginSubmit(e, data) {
    e.preventDefault()
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(parsedRes => {
        this.setState({
          auth: parsedRes.auth,
          user: parsedRes.data.user,
        })
      }).catch(err => console.log(err))
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault()
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes)
        this.setState({
          auth: parsedRes.auth,
          user: parsedRes.data.user,
        })
      }).catch(err => console.log(err))
  }

  handleUserEditSubmit(e, data, id) {
    e.preventDefault()
    this.setState({ fireRedirect: false, })
    fetch(`/api/user/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(parsedRes => {
        this.setState({
          fireRedirect: true,
          redirectPath: '/user',
          user: parsedRes.data.updatedUser,
        })
      }).catch(err => console.log(err))
  }

  logout() {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
      .then(parsedRes => {
        this.setState({
          auth: parsedRes.auth,
        })
      }).catch(err => console.log(err))
  }

  deleteUser(id) {
    fetch(`/api/user/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(() => {
        this.setState({
          auth: false,
          user: null,
        })
      }).catch(err => console.log(err))
  }

  selectedPoster(id) {
    fetch(`/api/search/details/${id}`, {
      method: 'POST',
    }).then(res => res.json())
      .then(jsonRes => {
        this.setState({
          selected: jsonRes.data,
          fireRedirect: true,
          redirectPath: `/details/${id}`,
        })
      })
  }


  handleFormSubmit = (evt, data) => {
    evt.preventDefault();
    if (data.titleType === 'movie') {
      fetch('/api/movies/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(res => res.json())

        .then(() => {
          this.setState({
            fireRedirect: true,
            redirectPath: '/user'
          })
        })
    } else if (data.titleType === 'tvSeries') {
      fetch('/api/series/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(res => res.json())
        .then(() => {
          this.setState({
            fireRedirect: true,
            redirectPath: '/user'
          })
        })
    } else if (data.titleType === 'tvEpisode') {
      fetch('/api/episodes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(res => res.json())
        .then(() => {
          this.setState({
            fireRedirect: true,
            redirectPath: '/user'
          })
        })
    }
  }

  toggleLoginRegister() {
    this.setState({
      fireRedirect: true,
      redirectPath: '/register'
    })
  }

  handleUsersInputSubmit(e, watched, rating, titleType, id, check) {
    e.preventDefault()
    let data = {}
    if (watched === 'on') {
      data = {
        has_watched: true,
        ratings: parseInt(rating),
        titleType: titleType,
        imdb_id: id,
      }
    } else {
      if (check.watched_time) {
        data = {
          has_watched: true,
          ratings: parseInt(rating),
          titleType: titleType,
          imdb_id: id,
          check: check.watched_time
        }
      } else {
        data = {
          has_watched: false,
          ratings: parseInt(rating),
          titleType: titleType,
          imdb_id: id,
        }
      }
    }
    fetch('/api/input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(() => {
      this.setState({
        fireRedirect: true,
        redirectPath: '/user',
      })
    })
  }

  deleteFromWatch(id, data) {
    let type = {
      titleType: data
    }
    fetch(`/api/input/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(type),
    }).then(() => {
      this.getUserContent()
      this.setState({
        fireRedirect: true,
        redirectPath: '/user'
      })
    })
  }

  getUserContent() {
    fetch(`/api/user/${this.state.user.id}`, {
        method: 'GET',
    })
        .then(res => res.json())
        .then(parsedRes => {
            this.setState({
              watchList: parsedRes,
              fireRedirect: true,
              redirectPath: '/user'
            })
        }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header logout={this.logout} userAuth={this.state.auth} />
        <div className="container">
          <Route exact path='/'
            render={() => (
              <Home userAuth={this.state.auth} />
            )}
          />
          <Route exact path='/login'
            render={() => (
              this.state.auth
                ? <Redirect to='/user' />
                : <Login handleLoginSubmit={this.handleLoginSubmit} toggleLoginRegister={this.toggleLoginRegister} />
            )}
          />
          <Route exact path='/register'
            render={() => (
              this.state.auth
                ? <Redirect to='/user' />
                : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
            )}
          />
          <Route exact path='/user'
            render={() => (
              !this.state.auth
                ? <Redirect to='/login' />
                : <User deleteFromWatch={this.deleteFromWatch} watchList={this.state.watchList} getUserContent={this.getUserContent} deleteUser={this.deleteUser} user={this.state.user} auth={this.state.auth} logout={this.logout} selectedTitle={this.selectedPoster} />
            )}
          />

          <Route exact path='/user/edit'
            render={() => (
              this.state.auth
                ? <UserEdit handleUserEditSubmit={this.handleUserEditSubmit} user={this.state.user} />
                : <Redirect to='/user' />
            )}
          />

          <Route exact path='/search/'
            render={() => (<SearchController user={this.state.user} selectedPoster={this.selectedPoster} pageStatus='initial' />)}
          />

          <Route exact path='/details/:id'
            render={() => (<Details user={this.state.user} selected={this.state.selected} handleUsersInputSubmit={this.handleUsersInputSubmit} handleFormSubmit={this.handleFormSubmit} selectedPoster={this.selectedPoster} />)}
          />

          <Route exact path='/about'
            render={() => (<About user={this.state.user} />)}
          />

          {this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />}
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
