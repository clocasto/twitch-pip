import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';
import React, { Component } from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class ControlPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      streamToAdd: ''
    }
    this.updateValue = function (evt) {
      console.log('Stream Added');
      this.setState({
        streamToAdd: evt.target.value,
      });
    }.bind(this);
  }
  componentDidMount(){
  this.toggleFullScreen = function() {
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
   this.props.addPlayer(this.state.streamToAdd);
   this.state.streamToAdd = ''
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
          </Nav>
          <Nav pullRight>
            <Navbar.Form pullRight>
              <Form onSubmit={this.handleSubmit.bind(this)} inline={true}>
                <Input
                onChange={this.updateValue.bind(null)}
                value={this.state.streamToAdd}
                type="text" ref="newstream" label="Stream Name" floatingLabel={true} />
                <Button onClick={this.handleSubmit.bind(null, this.state.streamToAdd)} color="primary">Add Stream</Button>
              </Form>
            </Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default ControlPanel;
