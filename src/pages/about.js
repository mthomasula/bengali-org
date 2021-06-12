import React from "react"
import Layout from "../components/Layout"
import { Container } from "react-bootstrap"
import "./page styles/about.css"
import Img from "../images/homepage/Img.jpg"
import Carousel from "../components/homepage/carousel"

export default function About() {
  return (
    <Layout>
      <main className="container">
        <h1>Welcome to our page</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>We are people in Norcross GA</p>
      </main>
    </Layout>
  )
}
