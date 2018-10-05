import React, { Component } from 'react';
import Content from '../components/content/Content';
import Login from '../components/login/Login';
import './App.css';

class App extends Component {
  isLogged = false;

  constructor(){
    super();
    this.context={urlConnect: 'http://localhost:8080/'};
  }

  render() {
    return (this.isLogged) ? <Content />:<Login />;
  }
}

export default App;
