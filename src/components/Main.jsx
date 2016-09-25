import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Player from './player.jsx';
import Navigation from './navbar.jsx'

class Main extends Component {
  render() {
    return (
      <div className="App row">
      	<Navigation />
        <div className="col-md-9">
          <Player {...this.props} />
        </div>
        <div className="col-md-3">
        </div>
      </div>
    );
  }
}

export default Main;
