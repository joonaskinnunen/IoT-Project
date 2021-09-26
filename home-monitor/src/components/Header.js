/* eslint-disable react/prop-types */
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../logo.png"

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Home Monitor"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#link">Kirjaudu ulos</Nav.Link>
          </Nav>
        </Navbar>
    </div>
  )
}

export default Header
