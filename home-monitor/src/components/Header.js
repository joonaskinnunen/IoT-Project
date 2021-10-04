import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../logo.png"

const Header = ({ user, logout }) => {
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
          {user !== null && <Nav.Link onClick={ logout } href="https://kotona.herokuapp.com/">Kirjaudu ulos</Nav.Link>}
          </Nav>
        </Navbar>
    </div>
  )
}

export default Header