import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/Layout.css"

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div className="content">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
