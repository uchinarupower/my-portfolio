import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navi-section">
      <Navbar bg="light" expand="lg" className="navi-section">
        <Navbar.Brand as={Link} to="/my-portfolio">&emsp;uchinarupower's Portfolio</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/my-portfolio">&emsp;About</Nav.Link>
            <Nav.Link as={Link} to="/my-portfolio-event">&emsp;Event</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
}

export default Navigation;
