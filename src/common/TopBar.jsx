import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLogout } from '../hook/useLogout';
import { Button } from 'react-bootstrap';
const TopBar = () => {
  const logout = useLogout()
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Button variant="danger" onClick={logout}>Logout</Button>
          </Container>
        </Navbar>
      </>
    );
}

export default TopBar