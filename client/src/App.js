import React from 'react';
import './App.css';
import Header from './components/Header'
import User from './components/User'
import Home from './components/Home'
import Search from './components/Search'
import Show from './components/Show'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Show />
        </div>

      </div >
    </Router>
  );
}

export default App;
