import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style.css';
import logo from './assets/images/logo.png';
import linkedin from './assets/images/linkedin.png';
import github from './assets/images/github.png';
import behance from './assets/images/behance.png';
import { Link } from 'react-router-dom';
import {Box, Button, SwipeableDrawer } from '@mui/material';
import { FaBars } from 'react-icons/fa';


function Header() {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

const isSticky = (e) => {
  const header = document.querySelector('.header-section');
  const scrollTop = window.scrollY;
  scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
};

const [state, setState] = React.useState({
  left: false,
});

const toggleDrawer = (anchor, open) => (event) => {
  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
  <div className='header-nav header-sidebar'>
                <Navbar id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">What I Do</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Navbar>
              </div>
              </Box>
);
  return (
    <>

      <header className='header-section'>
        <Navbar expand="lg" className="header">
          <Container>
            <div className='header-section'>
              <div className='header-nav'>
              {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className='d-lg-none d-block d-sm-block header-toggle'>{<FaBars/>}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
                <Navbar.Brand href="/">
                  <img src={logo} />
                </Navbar.Brand>
              </div>
              
              <div className='header-nav'>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">What I Do</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
              <div className='header-nav'>
                <ul>
                  <li>
                  <Link to={"https://www.linkedin.com/in/kunika-gupta-2a3890191/" } target="_blank"><img src={linkedin}/></Link>
                  
                  </li>
                  <li>
                  <Link to={"https://github.com/Kunika10" } target="_blank">
                  <img src={github}/>
                  </Link></li>
                  <li>
                  <Link to={"https://www.behance.net/kunikagupta1" } target="_blank">
                  <img src={behance}/>
                  </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </Container>
        </Navbar>
        </header>
    </>
  );
}

export default Header;