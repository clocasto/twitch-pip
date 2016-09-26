import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Player from './player.jsx';
import Chat from './Chat.jsx';
import Navigation from './navbar.jsx'

class Main extends Component {
  render() {
    return (
      <div className="App row">
      	<Navigation {...this.props} />
        <div className="col-md-9">
          <Player {...this.props} />
        </div>
          <Chat {...this.props}/>
      </div>
    );
  }
}

export default Main;
