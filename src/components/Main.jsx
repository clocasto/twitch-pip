import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Player from './player.jsx';
import ControlPanel from './navbar.jsx'

class Main extends Component {
  render() {
    return (
      <div className="App">
      	<ControlPanel />
        <Player {...this.props} />
      </div>
    );
  }
}

export default Main;
