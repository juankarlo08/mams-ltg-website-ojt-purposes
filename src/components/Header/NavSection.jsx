import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../img/logo.png';
import Button from 'react-bootstrap/Button';
import './NavSection.css';
import { motion } from 'framer-motion';

const MotionNavbar = motion(Navbar);
const MotionButton = motion(Button)

const NavSection = () => {
  const location = useLocation();

  const navList = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Branches', path: '/branches' },
    { name: 'Franchising', path: '/franchising' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <MotionNavbar 
    collapseOnSelect 
    expand="lg" 
    sticky="top" 
    className="bg-body-light p-0"
       initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type:'spring', stiffness: 120 }}>

      <Container fluid className="custom-x-padding bg-white py-2">

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
          <Nav className="mx-auto custom-nav text-center" >
            {navList.map((list, index) => (
              <Nav.Link
                as={Link}
                to={list.path}
                active={location.pathname === list.path}
                key={index}
                draggable="false"
                className="position-relative"
              >
                {list.name}
                {location.pathname === list.path && (
                  <motion.div
                    className="underline"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <MotionButton className="rounded" variant="danger" size="sm" as={Link} to="/contact" 
             whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
              Franchise Now
            </MotionButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </MotionNavbar>
  );
};

export default NavSection;
