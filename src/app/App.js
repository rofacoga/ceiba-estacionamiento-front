import React, { Component } from 'react';
import Navigation from '../components/navigation/Navigation';
import Login from '../components/login/Login';
import './App.css';

class App extends Component {
  isLogged = true;
  render() {
    return (this.isLogged) 
    ? (<Login />)
      : ( 
        <div className="App">
          <Navigation />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      );
  }
}

export default App;
