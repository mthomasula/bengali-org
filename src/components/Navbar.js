import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
            <nav>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">Our Story</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </nav>
    )
}
