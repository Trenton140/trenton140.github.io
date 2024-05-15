import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Navbar.Brand href="#home" className="navbar-brand-custom">Trenton Tong</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto"> {/* Use m-auto to center */}
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
