import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import User from './components/User'
import Home from './components/Home'
// import Search from './components/Search'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import fetch from 'node-fetch';

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: false,
      user: null,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
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

  render() {
    return (
      <Router>
        <div className="App">
          <Header logout={this.logout} />
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
                  : <User user={this.state.user} />
              )}
            />



          </div>
          <Footer />
        </div >
      </Router>
    );
  }
}

export default App;
