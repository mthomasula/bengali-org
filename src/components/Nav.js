import { Link } from "gatsby"
import React from "react"
import { useState } from "react"
import { Navbar } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import "../styles/Nav.css"

export default function Nav() {
  const [navBar, setNavBar] = useState(false)

  const navBarEffect = () => {
    if (window.scrollY >= 8) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }

  window.addEventListener("scroll", navBarEffect)

  return (
    <header>
      <container>
        <Navbar
          className={navBar ? "navigation active" : "navigation"}
          fixed="top"
        >
          <Navbar.Brand href="/">Bengali Community</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <Link to="/" className="nav-link">
            <Button variant="outline-light">Home</Button>
          </Link>
          <Link to="/about" className="nav-link">
            <Button variant="outline-light">Our Story</Button>
          </Link>
          <Link to="/services" className="nav-link">
            <Button variant="outline-light">Services</Button>
          </Link>
          <Link to="/contact" className="nav-link">
            <Button variant="outline-light">Contact Us</Button>
          </Link>
        </Navbar>
      </container>
    </header>
  )
}
