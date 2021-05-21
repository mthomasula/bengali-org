import { Link } from 'gatsby'
import React from 'react'
import { useState } from 'react';
import { Navbar } from 'react-bootstrap'
import '../styles/Nav.css'



export default function Nav() {
    const [navBar, setNavBar] = useState(false);


    const navBarEffect = () => {
        if (window.scrollY >= 8) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', navBarEffect);

    return (
        <header>
            <Navbar className={navBar ? 'navigation active' : 'navigation'} fixed="top">
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
