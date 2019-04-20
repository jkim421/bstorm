import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            BStorm Home Page
          </p>
        </header>
      </div>
    );
  }
}

export default App;
