import { Nav, Navbar, Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import UseDarkMode from './useDarkMode';
export default function MyNavbar({ darkMode, toggleDarkMode }) {
  const [isDarkMode, setIsDarkMode] = UseDarkMode();

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode, setIsDarkMode]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/"><Navbar.Brand>Portfolio</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link>L'agence</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/works">
              <Nav.Link>Nos projets</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
