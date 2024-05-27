import React,{ useState, useEffect }  from 'react'
import CardCourses from '../Pages/CardCourses.json'
import Card from '../Pages/Card';

import './Home.css'

import { Link } from 'react-router-dom';

const Home = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 500) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 10); // Adjust the interval as needed
            return () => clearInterval(timer);
        }
    }, [count]);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        joiningTime: '',
        message: ''
      });
    
      const [errors, setErrors] = useState({});
    
      const validateForm = () => {
        let formErrors = {};

    // Name validation: Only letters and spaces
    if (!formData.name) {
      formErrors.name = 'Name is required.';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      formErrors.name = 'Name can only contain letters and spaces.';
    }

    // Email validation
    if (!formData.email) {
      formErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Invalid email address.';
    }

    // Phone validation: Only digits, 10 characters
    if (!formData.phone) {
      formErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits.';
    }

    // Course validation
    if (!formData.course) formErrors.course = 'Please select a course.';

    // Joining Time validation
    if (!formData.joiningTime) formErrors.joiningTime = 'Please select a joining time.';

    // Message validation
    if (!formData.message) formErrors.message = 'Message cannot be empty.';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          alert('Form submitted successfully!');
          // You can add your form submission logic here
        }
      };
    
    

    return (
        <div>

            <section className='home-banner-wr'>

                <div className='center-wrapper'>
                    <div className='banner-content clearfix'>
                        <div className='banner-img-right'>
                            <figure>
                                <img className='girlimage' src='./Best_IT_Training_Indore_Student.png' />
                            </figure>
                            

                        </div>

                        <div className='banner-job-oriented left'>
                            <div className='banner-sub-heading'>
                                <h4>"Get course now"</h4>
                            </div>
                            <div className='banner-heading'>
                                <h1>"Unlock" <span>Your Potential</span> "Choose the Best"  <span> Software Traning</span> "Institute in Indore"</h1>



                            </div>
                            <div className='banner-para'>

                                <p>Welcome to It traning Indore , your premier desination for comprehencsive IT traning and placement in indore</p>
                            </div>
                            <div className='banner-search'>

                                <form>

                                    <div className='banner-from-input'>

                                        <div className='search-bar'>
                                            <input className='seach-feild' placeholder='Search-course' />
                                        </div>

                                        <div >
                                            <input className='seach-feild-btn' type='submit' value='search' />
                                        </div>
                                    </div>

                                </form>




                            </div>
                            <div className='banner-popular-search'>
                                <div className='banner-popular-search'>
                                    <div className='popular-search-heading'>
                                        <span>Popular Searches</span>
                                    </div>
                                    <div className='popular-search-link'>
                                        <a href=''> Web Development</a>
                                        <a href=''> Graphics Design</a>

                                        <a href=''> Animation</a>



                                    </div>
                                </div>


                            </div>
                            <div className='banner-course-links'>
                                <div className='banner-course-link'>
                                    <img src='' />
                                    <a href=''> Development</a>
                                </div>
                                <div className='banner-course-link'>
                                    <img src='' />
                                    <a href=''> Designing</a>
                                </div>
                                <div className='banner-course-link'>
                                    <img src='' />
                                    <a href=''> Digital marketing</a>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>



            {/* inffo card      */}
            <div>

                <div>
                    <div className='paragraph'>

                        <h1>Choose the Right courses with Placement
                            to update your knowledge!</h1>
                        <p >IT Training Indore, we understand the importance of quality education and career growth. Our institute stands out as a trusted destination for software training in Indore. With a team of industry experts, we offer comprehensive <b> IT courses</b> that cover the latest software technologies. Our hands-on training approach ensures that you gain practical skills and industry-specific knowledge. <br></br><br></br>

                            Whether you want to learn programming languages, web development, or mobile app development, we have a course tailored to your needs. Our courses focus on preparing students to ensure that they are ready to defeat the upcoming challenges in their career lives. <br></br>
                            <br></br>

                            Look no further than <b> courses offering placements.</b> These remarkable programs provide you with the knowledge and skills you need to excel in your chosen field and offer the opportunity to gain hands-on experience through work placements.</p>

                    </div>

                    <div>



                    </div>
                </div>


            </div>

            <div className="mainblog">
                {

                    CardCourses.map((ele, index) => {
                        if (index < 6) {
                            return (
                                <div key={index}>

                                    <Card Img={ele.Img} Title={ele.Title} Des={ele.Des} Page={ele.page} />
                                </div>
                            );
                        }
                        else {
                            return null;
                        }



                    })

                }

                <a className="btn" type="button">
                    <strong>
                        <Link to="/courses">See More</Link> </strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </a>

            </div>




            <div>

                <div>
                    <div className='paragraph2'>

                        <h1>How will IT Training uplift your career?
                        </h1>
                        <p >Whether you're a recent graduate looking to kick-start your career or a professional seeking
                            to upskill and stay ahead, courses offering placements can give you the edge you need.
                            By combining classroom learning with real work environments, these programs allow you a
                            head start in your career. Additionally, the chance to build networks and connections within the industry can lead to job
                            offers and long-term career opportunities.</p>

                    </div>


                </div>


            </div>


            <div className='parentcard'>
                <div className="Hcard-container">
                    <div className="Hcard">
                        <div className="Hfront-content">
                            <p>Hover me</p>
                        </div>
                        <div className="Hcontent">
                            <p className="Hheading">Card Hover</p>
                            <p className='paracard'>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="Hcard-container">
                    <div className="Hcard">
                        <div className="Hfront-content">
                            <p>Hover me</p>
                        </div>
                        <div className="Hcontent">
                            <p className="Hheading">Card Hover</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Hcard-container">
                    <div className="Hcard">
                        <div className="Hfront-content">
                            <p>Hover me</p>
                        </div>
                        <div className="Hcontent">
                            <p className="Hheading">Card Hover</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="Hcard-container">
                    <div className="Hcard">
                        <div className="Hfront-content">
                            <p>Hover me</p>
                        </div>
                        <div className="Hcontent">
                            <p className="Hheading">Card Hover</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>







            </div>





            <div className='maincount'>
                <div className='maincountheading'>
                    <h1>We feel proud about our Stats</h1>
                </div>
                <div className='count'>

                    <h4 className='Hcount'>Mentors {count}+</h4>
                    <h4 className='Hcount'>years of experience {count}+</h4>
                    <h4 className='Hcount'>Placed {count}+</h4>
                    <h4 className='Hcount'>Years Of Journey{count}+</h4>




                </div>

            </div>


            <div className='mainform'>
                <div className='frmtop'>
                    <div className='man'>
                        <div>
                            <img className='maniamge' src='man.png' />
                        </div>
                        <div className='keysrok'>
                            <h1>Get a free  <br></br>
                                keystroke quote</h1>
                            <img  src='paperplane.png' />
                        </div>

                    </div>
                    {/* <div className='maincformheading'>
<h1>We feel proud about our Stats</h1>
</div> */}

<div className="itemform">
      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          className="in"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <br />
        
        <input
          className="in"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <br />
        
        <input
          className="in"
          type="number"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
        <br />
        
        <select
          className="in"
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select course</option>
          <option>Full Stack Developer</option>
          <option>Data Science</option>
          <option>Data Analyst</option>
          <option>Testing</option>
        </select>
        {errors.course && <p className="error">{errors.course}</p>}
        <br />
        
        <select
          className="in"
          name="joiningTime"
          value={formData.joiningTime}
          onChange={handleChange}
        >
          <option value="">How soon you want to join IT Training</option>
          <option>This Week</option>
          <option>After 15 Days</option>
          <option>This Month</option>
          <option>Next Batch</option>
        </select>
        {errors.joiningTime && <p className="error">{errors.joiningTime}</p>}
        <br />
        
        <textarea
          className="in"
          name="message"
          placeholder="Type Your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        <br />
        
        <button className="in" type="submit">Send</button>
      </form>
    </div>

                </div>

            </div>







        </div>

    )

  
  
}

export default Home
