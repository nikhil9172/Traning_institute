import React from 'react'

import { Link } from 'react-router-dom'
import './Blog.css'
import Cardblog from '../Pages/Cardblog'
import Blogdata from '../Pages/Blogdata.json'


const Blog = () => {
  return (
    <div>
      <div className="image-container">
        <img src="Contact.jpg" alt="Image Description" className="image" />
        <div className="text-overlay">
          <h1>Contact Us</h1>
          <div className='abouthead'>
            <Link to="/" className='aboutmainhead'>Home</Link>
            <span>{'>'} Blog</span>
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

       

 

  
    </div>
  )
}

export default Blog
