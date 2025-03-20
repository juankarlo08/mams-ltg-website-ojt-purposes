import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../img/logo.png';
import Button from 'react-bootstrap/Button';

const NavSection = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-light">
    <Container fluid className='custom-x-padding'>
      <Navbar.Brand as={Link} to="/">
      <img
          src={Logo}
          width="auto"
          height="45"
          className="d-inline-block align-top"
          alt="LT&G Logo"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
            <Nav.Link className="text-center" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="text-center" as={Link} to="/about">About</Nav.Link>
            <Nav.Link className="text-center" as={Link} to="/branches">Branches</Nav.Link>
            <Nav.Link className="text-center" as={Link} to="/franchising">Franchising</Nav.Link>
            <Nav.Link className="text-center" as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Button className="rounded" variant="danger" size="sm" href="#">Franchise Now</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavSection