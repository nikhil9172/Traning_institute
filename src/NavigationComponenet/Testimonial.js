import React from 'react'


import Testimonialcard from '../Pages/Testimonialcard'


import Testimonialdata from '../Pages/Testimonialdata.json'
import './Testimonial.css'
import {Link} from 'react-router-dom'


const Testimonial = () => {
  return (
    <div>
     <div className="image-container">
        <img src="Contact.jpg" alt="Image Description" className="image" />
        <div className="text-overlay">
          <h1>Testimonial</h1>
          <div className='abouthead' >
            <Link className='aboutmainhead' to="/" >Home</Link>
            <span>{'>'} Testimonial</span>
          </div>

        </div>
      </div>
      <div id="portfolio">
      {
            Testimonialdata.map(( ele , index)=>{
              return(
                <div key={index}>
                <Testimonialcard  Name={ele.Name} Position={ele.Position} Img={ele.Img} Des={ele.Des} />


                </div>
              )
            })
      }
      </div>
      
  
   
    </div>
  )
}

export default Testimonial
