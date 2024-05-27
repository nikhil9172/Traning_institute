import React from 'react';
import './Blogcard.css';
import { Link } from 'react-router-dom';

const Cardblog = ({ Img, Title, logo, Name }) => {
    return (
        <div className="mainblog">
            <div className="blogitem">
                <img src={Img} alt="Web Development" />
                <h4>{Title}</h4>
                <img className="logo" src={logo} alt="IT Training Logo" />
                <a href="/">{Name}</a>
            </div>
        </div>
    );
};

export default Cardblog;
