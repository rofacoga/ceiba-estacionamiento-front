import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../app/App.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="text-white">
          <img src={logo} className="App-logo" alt="logo" />
          Estacionamiento
        </a>
      </nav>
    );
  }
}

export default Navigation;
