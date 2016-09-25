import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, FormGroup, FormControl } from 'react-bootstrap';

import React, { Component } from 'react';

class ControlPanel extends Component {

  handleSubmit(e) {
    e.preventDefault();
    let name = this.refs.newstream.value;
    this.refs.streamform.reset();
    return this.props.addPlayer(name);
  }

  render() {

    return (
      <Navbar id="main-navbar" inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Twitch PiP</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Top</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavDropdown eventKey={3} title="Memes" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>siractionslacks</MenuItem>
              <MenuItem eventKey={3.2}>ayylmao</MenuItem>
              <MenuItem eventKey={3.3}>zekeswirl</MenuItem>
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
