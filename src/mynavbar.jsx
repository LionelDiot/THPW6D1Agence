import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <LinkContainer to="/"><Navbar.Brand>Portfolio</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/works">
              <Nav.Link>WorkHome</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Works:" id="basic-nav-dropdown">
              <LinkContainer to="/works/concretcases">
                <NavDropdown.Item>ConcretCases</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/works/exercices">
                <NavDropdown.Item>Exercices</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/works/casestudies">
                <NavDropdown.Item>CaseStudies </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
