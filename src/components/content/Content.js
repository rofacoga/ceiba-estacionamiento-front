import React, { Component } from 'react';
import Navigation from '../navigation/Navigation';
import './Content.css';

class Content extends Component {
  render() {
    return ( 
        <div className="Content">
          <Navigation />
          <div className="ContentBody">
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      );
  }
}

export default Content;
