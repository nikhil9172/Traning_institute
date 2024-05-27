import React from 'react'
import './Card.css'

import { Link } from 'react-router-dom';


const Card = ({ Img, Title, Des, Page }) => {
    return (
        <div>
            <div className="cardmain" >
                <div className='carditem'>


                    <img className="card-img-top" src={Img} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"><a href='/'>{Title}</a></h5>
                        <p className="card-text">{Des}</p>
                       
                           <Link className='cls' to={Page}>Details </Link>   
                      
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Card
