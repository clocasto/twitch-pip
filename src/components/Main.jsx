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
          <div id="base" className="col-md-8 col-lg-8 col-lg-offset-1">
            <Player {...this.props} />
          </div>
          <Chat {...this.props}/>
      </div>
    );
  }
}

export default Main;
