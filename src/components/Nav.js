
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => (

  <Navbar>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Goals">Goals</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Discover</Nav.Link>
          </Nav.Item>
          <Nav.Item id="profileNavButton">
            <Nav.Link href="/Profile">Profile</Nav.Link>
          </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
