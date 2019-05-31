
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
            <Nav.Link href="#">Feed</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Goals">Goals</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Discover</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Profile</Nav.Link>
          </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>


      // <ul className="nav nav-bar-expand{md}">
      //   <li className="nav-item">
      //     <a className="nav-link" href="/">Home</a>
      //   </li>
      //   <li className="nav-item">
      //     <a className="nav-link" href="#">Feed</a>
      //   </li>
      //   <li className="nav-item">
      //     <a className="nav-link" href="/Goals">Goals</a>
      //   </li>
      //   <li className="nav-item">
      //     <a className="nav-link" href="#">Discover</a>
      //   </li>
      //   <li className="nav-item">
      //     <a className="nav-link" id="accountLink" href="#">Profile</a>
      //   </li>
      // </ul>
)
