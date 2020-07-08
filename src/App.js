import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LandingPage from './components/landingpage.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="header-color" expand="lg" fixed="top" variant="dark" collapseOnSelect="true">
        <AnchorLink href='#home'><Navbar.Brand>Kinjal Shah Photography</Navbar.Brand></AnchorLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLinks">
            <AnchorLink href='#artist'><Nav.Link href='#artist'>Artist</Nav.Link></AnchorLink>
            <AnchorLink href='#art'><Nav.Link href='#art'>Art</Nav.Link></AnchorLink>
            <AnchorLink href='#home'><Nav.Link href='#landingpage'>Home</Nav.Link></AnchorLink>
            <AnchorLink href='#conLink'><Nav.Link href='#resLink'>Contact</Nav.Link></AnchorLink>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
              <div className="page-content" />
              <LandingPage/>
      </React.Fragment>

    );
  }
}

export default App;
