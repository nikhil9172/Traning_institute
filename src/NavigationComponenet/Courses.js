import React from 'react'

import { Link } from 'react-router-dom'
import './Courses.css'

import CardCourses from '../Pages/CardCourses.json'

import Card from '../Pages/Card'


const Courses = () => {
  return (
    <div>
      <div className="image-container">
        <img src="Contact.jpg" alt="Image Description" className="image" />
        <div className="text-overlay">
          <h1>Courses</h1>
          <div className='abouthead'>
            <Link to="/" className='aboutmainhead'>Home</Link>
            <span>{'>'} Courses</span>
          </div>

        </div>
      </div>


      <div className='body'>
    <div class="container-courses">
        <h1><b>Choose the <span>Best Coding Classes</span>
            Explore Top Courses with Placement Opportunities at
            <span>IT Training Institute</span></b></h1>
        <p>Finding a course with placement opportunities can give you a significant advantage in your job search.
            Here in IT training you will explore top IT Courses that not only provide valuable skills and knowledge but also offer placement opportunities.
            It allows you to gain real-world experience.
            <br></br>

            From HTML and CSS to JavaScript and Python, you'll learn the essential programming languages that power the digital world.

            There are a wide range of courses available that offer placement opportunities.
            These courses not only provide you with the necessary theoretical knowledge but also give you hands-on experience,
            allowing you to develop relevant skills and build a network of industry connections.<br></br>

            Not only will you gain practical coding skills, but you'll also have the opportunity to work on real-world projects and collaborate with fellow coding enthusiasts. Whether you're looking to start a career in software development or simply enhance your coding skills, the best coding classes in Indore will provide you with the tools and support you need to achieve your goals. With guaranteed placements, you can confidently invest your time and money knowing that your future is not left to chance.</p>
    </div>
</div>


<div className="mainblog">
      {
      
        CardCourses.map((ele , index)=>{
         
          return(
            <div key={index}>
        
            <Card  Img={ele.Img} Title={ele.Title} Des={ele.Des} Page={ele.page}/>
            </div>
          );
         

         

        })
        
      }
</div>

    
    </div>
  )
}

export default Courses
