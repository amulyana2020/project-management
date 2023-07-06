import React from 'react';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import {BiSolidShip} from 'react-icons/bi';
import {FaUser} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar
        bg='dark'
        variant='dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <BiSolidShip className='mx-2' />
              CPS Project Management
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaUser className='mx-2' />
                  Login
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
