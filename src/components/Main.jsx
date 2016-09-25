import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Player from './player.jsx';
import Console from './Console';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Console {...this.props} />
        </div>
        <Player {...this.props} />
      </div>
    );
  }
}

export default Main;
