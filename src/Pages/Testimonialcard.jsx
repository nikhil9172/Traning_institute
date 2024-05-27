import React from 'react'
import '../NavigationComponenet/Testimonial.css'

const Testimonialcard = ( {Name , Position , Img , Des}) => {
    return (
        <div>
            <div id="portfolio">
                <div className="containerblog">

                    <div className="work-list">
                        <div className="work">

                            <div className="card-content">
                                <h6 className="name">{Name}</h6>
                                <h6 className="position">{Position}</h6>
                                <img src={Img} alt='profile photo' />
                            </div>
                            <div className="layer">
                                {/* <h3>Diligenta (A Subsidiary of TCS)</h3> */}
                                <p>{Des}
                                </p>
                                <a href="https://www.diligenta.co.uk/"><i class="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>


                    </div>

                </div>






            </div>
            

        </div>
    )
}

export default Testimonialcard
