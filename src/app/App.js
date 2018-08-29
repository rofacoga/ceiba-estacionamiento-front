import React, { Component } from 'react';
import Content from '../components/content/Content';
import Login from '../components/login/Login';
import './App.css';

class App extends Component {
  isLogged = false;
  render() {
    return (this.isLogged) 
    ? ( 
        <div className="App">
          <Content />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      ):(<Login />);
  }
}

export default App;
