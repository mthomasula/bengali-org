import React from 'react';
import Layout from '../components/Layout';
import './page styles/services.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'


export default function Services() {

//Test data. Replace later
    const servicesList = [
        {
            type: "Commmunity gather",
            location: "Lora Smith Rd."
        },
        {
            type: "Yoga in the park",
            location: "Grant Park"
        },
        {
            type: "Charity event",
            location: "Rec Center"
        },
        {
            type: "Movie in the park",
            location: "Some Park"
        },
        
    ];

    const renderedList = servicesList.map((item) => {
        return(
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{item.type}</Card.Title>
                    <Card.Text>{item.location}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        )
    });



    return (
        <Layout>
            <div className='container'>
                <CardGroup>
                    {renderedList}
                </CardGroup>
            </div>
        </Layout>
    )
}
