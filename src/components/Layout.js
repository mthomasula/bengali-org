import React from 'react'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import '../styles/Layout.css';


export default function Layout({ children }) {
    return (
        <div>
            <div className="navv">
                <Nav />
            </div>
                <div className="content">
                    { children }
                </div>
                <div className="footer">
                    <p>Footer</p>
                </div>
           
        </div>
    )
}
