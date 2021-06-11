import React from "react"
import Layout from "../components/Layout"
import "./page styles/services.css"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

import img1 from "../assets/jamie-templeton-LWT9Wix8lS8-unsplash.jpg"
import img2 from "../assets/julian-gentilezza-IWoHLg2-UQU-unsplash (1).jpg"
import img3 from "../assets/nina-strehl-Ds0ZIA5gzc4-unsplash (1).jpg"
import img4 from "../assets/corina-rainer-9FDI-_E29fk-unsplash.jpg"

export default function Services() {
  //Test data. Replace later
  const servicesList = [
    {
      type: "Commmunity gather",
      location: "Lora Smith Rd.",
      image: img2,
      date: "May 5th @ 4PM",
    },
    {
      type: "Yoga in the park",
      location: "Grant Park",
      image: img1,
      date: "May 18th @ 9:00AM",
    },
    {
      type: "Charity event",
      location: "Rec Center",
      image: img3,
      date: "May 4th @ 2:30PM",
    },
    {
      type: "Movie in the park",
      location: "Some Park",
      image: img4,
      date: "May 22nd @ 9:00PM",
    },
  ]

  const renderedList = servicesList.map(item => {
    return (
      <div className="container">
        <div>
          <Card className="text-center">
            <Card.Img variant="top" src={item.image} fluid />
            <Card.Body>
              <Card.Title>{item.type}</Card.Title>
              <Card.Text>{item.location}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{item.date}</small>
            </Card.Footer>
          </Card>
        </div>
      </div>
    )
  })

  //   {renderedList}

  return <Layout>{renderedList}</Layout>
}
