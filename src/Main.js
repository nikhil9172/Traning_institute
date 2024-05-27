import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './NavigationComponenet/Home'
import About from './NavigationComponenet/About'
import Blog from './NavigationComponenet/Blog'
import Contact from './NavigationComponenet/Contact'
import Courses from './NavigationComponenet/Courses'
import Testimonial from './NavigationComponenet/Testimonial'
import Cakephp from './Pages/Cakephp'
import Clanguage from './Pages/Claguage'
import Laravel from './Pages/Laravel'
import Magneto from './Pages/Magneto'
import Shopify from './Pages/Shopify'
import Webapi from './Pages/Webapi'
import Php from './Pages/php'
import Codelgniter from './Pages/Codelgniter'
import Wordpress from './Pages/Wordpress'

import Navbar from './NavigationComponenet/Navbar'
import Footer from './NavigationComponenet/Footer'

const Main = () => {
  return (
    <div>
   

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/Coursepage/Cakephp' element={<Cakephp />} />
        <Route path='/Coursepage/Clanguage' element={<Clanguage />} />
        <Route path='/Coursepage/Laravel' element={<Laravel />} />
        <Route path='/Coursepage/Magneto' element={<Magneto />} />
        <Route path='/Coursepage/Shopify' element={<Shopify />} />
        <Route path='/Coursepage/Wordpress' element={<Wordpress />} />
        <Route path='/Coursepage/Php' element={<Php/>} />
        <Route path='/Coursepage/Codelgniter' element={<Codelgniter />} />
        <Route path='/Coursepage/Webapi' element={<Webapi />} />

    </Routes>
   
    
      
    </div>
  )
}

export default Main
