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
import Search from './components/SearchController'
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
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.handleUserEditSubmit = this.handleUserEditSubmit.bind(this)
    this.selectedPoster = this.selectedPoster.bind(this)
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
        console.log(parsedRes)
        this.setState({
          auth: parsedRes.auth,
          user: parsedRes.data.user,
        })
      }).catch(err => console.log(err))
  }

  handleRegisterSubmit(e, data) {
    e.preventDefault()
    console.log(data)
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
    console.log(data)
    fetch(`/api/user/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(parsedRes => {
        this.setState({
          //add page status change
          // auth: parsedRes.auth,
          user: parsedRes.data.user,
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
    fetch(`api/search/details/${id}`, {
      method: 'POST',
    }).then(res => res.json())
      .then(jsonRes => {
        this.setState({
          selected: jsonRes.data,
          fireRedirect: true,
          redirectPath: '/details',
        })
      })
  }

  handleFormSubmit = (evt, data) => {
    evt.preventDefault();
    fetch(`api/movies/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(() => {

      })
  }

  render() {
    return (
      <div className="App">
        <Header logout={this.logout} userAuth={this.state.auth} />
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route exact path='/login'
            render={() => (
              this.state.auth
                ? <Redirect to='/user' />
                : <Login handleLoginSubmit={this.handleLoginSubmit} />
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
                : <User deleteUser={this.deleteUser} user={this.state.user} logout={this.logout} />
            )}
          />

          <Route exact path='/user/edit'
            render={() => (
              this.state.auth
                ? <UserEdit handleUserEditSubmit={this.handleUserEditSubmit} user={this.state.user} />
                : <Redirect to='/user' />
            )}
          />

          <Route exact path='/search'
            render={() => (<Search user={this.state.user} selectedPoster={this.selectedPoster} pageStatus='initial' />)}
          />

          <Route exact path='/details'
            render={() => (<Details user={this.state.user} selected={this.state.selected} handleFormSubmit={this.handleFormSubmit} />)}
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
