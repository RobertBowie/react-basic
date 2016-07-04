import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavElement extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.title}</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="todo"><NavItem>ToDo List</NavItem></LinkContainer>
            <LinkContainer to="snake"><NavItem>Snake Game</NavItem></LinkContainer>
          </Nav>
          <Nav pullRight>
            <NavItem href="https://github.com/RobertBowie">GitHub</NavItem>
            <NavItem href="https://www.linkedin.com/in/robertbowie">LinkedIn</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavElement;
