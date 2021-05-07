import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';


export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            {/* <Container> */}
                <div className="content">
                    { children }
                </div>
            {/* </Container> */}
        </div>
    )
}
