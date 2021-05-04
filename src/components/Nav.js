import { Link } from 'gatsby'
import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Nav() {
    return (
        <header>
            <Navbar bg="dark">
                <Navbar.Brand href="/">Bengali Community</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">Our Story</Link>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link> 
                
            </Navbar>
        </header>
    )
}
