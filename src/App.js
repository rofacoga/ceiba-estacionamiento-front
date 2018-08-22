import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="col-md-2">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-md-10">
            <h1 className="App-title">Estacionamiento</h1>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
