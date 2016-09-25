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
        <div id="chatbox" className="col-md-3">
          <Chat {...this.props}/>
        </div>
      </div>
    );
  }
}

export default Main;
