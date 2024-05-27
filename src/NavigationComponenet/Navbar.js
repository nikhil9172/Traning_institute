
import React, { useState } from 'react';
import './Navabar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">      <img className='main-logo' src='./It_training_logo.png' alt="logo" /></div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
       
        <Link to="/">  Home</Link>
  
      <Link to="/about">About</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/testimonial">Testmonial</Link>
      <Link to="/contact">Contact us</Link>
       
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;

