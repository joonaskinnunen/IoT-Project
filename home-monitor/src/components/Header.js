/* eslint-disable react/prop-types */
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../logo.png"

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Home Monitor"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#link">Kirjaudu ulos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
