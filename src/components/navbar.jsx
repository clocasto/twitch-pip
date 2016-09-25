import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, FormGroup, FormControl } from 'react-bootstrap';

import React, { Component } from 'react';

class ControlPanel extends Component {
  render() {
    return (
      <Navbar inverse>
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
              <FormGroup>
                <FormControl type="text" placeholder="Stream1" />
                {'  '}
                <FormControl type="text" placeholder="Stream2" />
              </FormGroup>
              {/* {' '}
              <Button type="submit">Submit</Button> */}
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default ControlPanel;
