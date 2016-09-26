import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, FormGroup, FormControl } from 'react-bootstrap';

import React, { Component } from 'react';

class ControlPanel extends Component {
  componentDidMount(){
  this.toggleFullScreen = function() {
    console.log('ayy')
   let elem = document.getElementById("fullscreen");
   let player = document.getElementById('playercontainer')
   if (elem.requestFullscreen) {
      player.requestFullscreen();
   } else if (elem.msRequestFullscreen) {
      player.msRequestFullscreen();
   } else if (elem.mozRequestFullScreen) {
      player.mozRequestFullScreen();
   } else if (elem.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
   }

}
  }

  handleSubmit(e) {
    e.preventDefault();
    let name = this.refs.newstream.value;
    this.refs.streamform.reset();
    return this.props.addPlayer(name);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    return this.props.addPlayer(e.target.textContent);
  }

  render() {

    return (
      <Navbar id="main-navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Twitch PiP</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={this.toggleFullScreen} id='fullscreen' eventKey={1} href="#">FullScreen</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavDropdown eventKey={3} title="Memes" id="basic-nav-dropdown">
              <MenuItem onClick={this.handleClick.bind(this)} eventKey={3.1}>siractionslacks</MenuItem>
              <MenuItem onClick={this.handleClick.bind(this)} eventKey={3.2}>ayylmao</MenuItem>
              <MenuItem onClick={this.handleClick.bind(this)} eventKey={3.3}>zekeswirl</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <Navbar.Form pullRight>
              <form ref="streamform" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="newstream" placeholder="Stream Name" />
                <button type="submit">Add Stream</button>
              </form>
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default ControlPanel;
