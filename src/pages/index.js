import React from "react"
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomepageCarousel from "../components/Homepage/carousel";

export default function Home() {
  return (
    
      <Layout>
       
          <div>
          <HomepageCarousel/>
          </div>
       
      </Layout>
   
  )
}
