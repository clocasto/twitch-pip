import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Player from './player.jsx';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Player {...this.props} />
      </div>
    );
  }
}

export default Main;
