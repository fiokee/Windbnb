import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../assets/logo.png';

export const NavBar = () => {
  return (
<Fragment>

    <Navbar bg="#FFFFFF" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#"><img src={Logo}></img></Navbar.Brand>
     
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >

          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Location"
            className="me-2"
            aria-label="Search"
          />

            <Form.Control
            type="search"
            placeholder="Add guests"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-#fff" style={{color: "#fff", backgroundColor: '#EB5757'}}>Search</Button>
        </Form>
      
    </Container>
  </Navbar>
  {/* <h1>Stays in Finland</h1> */}
  </Fragment>
  )
}
export default NavBar
