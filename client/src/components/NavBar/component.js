import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap/lib';
import { Link } from 'react-router';

export default class NavBar extends Component {

  render() {
    return (
      <div>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={{ pathname: '/landing' }}>
                  Fresh Air
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <IndexLinkContainer to={{ pathname: '/' }}>
                  <NavItem eventKey={1}>Home</NavItem>
                </IndexLinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}