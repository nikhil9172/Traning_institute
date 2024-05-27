import React from 'react'
import Footer from '../Com/Footer'
import { Link } from 'react-router-dom'
import './Blog.css'
import Cardblog from './Cardblog'
import Blogdata from './Blogdata.json'

const Blog = () => {
  return (
    <div>
      <div className="image-container">
        <img src="Contact.jpg" alt="Image Description" className="image" />
        <div className="text-overlay">
          <h1>Contact Us</h1>
          <div style={{ display: "flex" }}>
            <Link to="/" style={{ marginRight: "8px" }}>Home</Link>
            <span>{'>'} Contact</span>
          </div>

        </div>
      </div>

      <div className="mainblog">
        {Blogdata.map((element, index) => (
          <div key={index}>
            <Cardblog Img={element.Img} Title={element.Title} logo={element.logo} Name={element.Name} />
          </div>
        ))}

        </div>

       

 

      <Footer />
    </div>
  )
}

export default Blog
