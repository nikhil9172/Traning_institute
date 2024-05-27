import React,{useState} from 'react'

import './About.css'
import { Link } from 'react-router-dom'


const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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
      <div className="image-container">
        <img src="Contact.jpg" alt="Image Description" className="image" />
        <div className="text-overlay">
          <h1>About</h1>
          <div className='abouthead'>
            <Link to="/" className='aboutmainhead'>Home</Link>
            <span>{'>'} About</span>
          </div>

        </div>
      </div>


      {/* section 1 */}
      <div className="container-sec">

        <div className="box-1">
          <div>
            <img src='Student.jpg' alt=' not Found ' />
          </div>
        </div>
        <div className="box-1" style={{ backgroundColor: '#f7c3d5' }}>
          <div>
            <h2>Taking your imagination as our upcoming opportunity.</h2>
            <p>We are one of the Indore EdTech training institutes, who energetically deliver immersive digital learning
              experiences through the latest courses and technology, industry partnerships, and top-notch faculty at ease.
              We provide training in the latest technologies like Java, Java Script, React, and Php etc.</p>

            <ul>
              <h3>Courses We Offer</h3>
              <li>  Looking for <b> Scratch Courses </b></li>
              <li>Search for <b> Experimentation while Learning </b></li>
              <li>Looking <b>Technology Updates</b></li>
              <li><b>Pocket-friendly</b> Courses</li>
              <li>Job Oriented <b>Skills Upgradation</b></li>


            </ul>
          </div>
        </div>

      </div>


      {/* section 1 */}
      <div className="container-sec">

        <div className="box-1">
          <div>
            <h2>Taking your imagination as our upcoming opportunity.</h2>
            <p>We are one of the Indore EdTech training institutes, who energetically deliver immersive digital learning
              experiences through the latest courses and technology, industry partnerships, and top-notch faculty at ease.
              We provide training in the latest technologies like Java, Java Script, React, and Php etc.</p>

            <ul>
              <h3>Courses We Offer</h3>
              <li>  Looking for <b> Scratch Courses </b></li>
              <li>Search for <b> Experimentation while Learning </b></li>
              <li>Looking <b>Technology Updates</b></li>
              <li><b>Pocket-friendly</b> Courses</li>
              <li>Job Oriented <b>Skills Upgradation</b></li>


            </ul>
          </div>
        </div>
        <div className="box-1">
          <img style={{ borderRadius: "50%" }} src='Career-growth.jpg' alt=' not found' />
        </div>

      </div>



      {/* section 1 */}
      <div className="container-sec">

        <div className="box-1">
          <img src='Educator.png' alt=' not found' />
        </div>
        <div className="box-1">
          <div>
            <h2>Our Beliefs</h2>
            <p> <Link to="/"><b>IT Training Institute</b> </Link> believe in offering job-oriented software training programs which are well-planned, keeping in view industry
              requirements and future prospects. Although we have the latest available resources to cater, giving the most outstanding results.
              We believe that it is not just money or manpower but, rather, team efforts which can make any organisation reach the sky-high.
              <br></br>
              <br></br>
              We have top-level faculty and a dedicated <b>placement cell </b>because for all the tech and non tech students, they are the building block on which the organisation rests. We give our students the freedom to discuss, contradict and learn. Also ensure that the right student chooses the right course according to his/her academic background, aptitude and skill-set. This will help our students get the career edge and the extra push that is so highly needed in a competitive job market, eventually leading to professional success.</p>


          </div>

        </div>

      </div>



      {/* section 1 */}
      <div className="container-sec">

        <div className="box-1">
          <div>
            <h1>Our Mission, Vision and Values</h1>
            <h5><b>Mission</b></h5>
            <p>Our aim is to provide skilled manpower in the areas of Web design , Web development, Software Development, Graphic Design, and SEO along with introducing students and professionals with the latest technology in the IT industry.</p>

            <h5><b>Vision</b></h5>
            <p>To deliver best output in the form of projects and courses, that will show the students clear vision for their future success.</p>

            <h5><b>Values</b></h5>
            <p>To always have transparency with everyone who connects with us with loyalty and integrity.</p>

          </div>
          </div>
          <div class="box-1">
            <img src='mission.jpg' alt=' not found' />
          </div>

        



      </div>
      <div className='frm-main'>
      <div className="form-container">
        <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-field">
                <label for="name">Name</label>
                <input  className="in"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}/>
           {errors.name && <p className="errorabt">{errors.name}</p>}
        <br />
            </div>
            <div className="form-field">
                <label for="email">Email</label>
                <input  className="in"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}/>
           {errors.email && <p className="errorabt">{errors.email}</p>}
        <br />
            </div>
            <div className="form-field">
                <label for="phone">Phone</label>
                <input
          className="in"
          type="number"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="errorabt">{errors.phone}</p>}
        <br />  </div>
            <div className="form-field">
                <label for="message">Message</label>
                <textarea
          className="in"
          name="message"
          placeholder="Type Your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="errorabt">{errors.message}</p>}
        <br /> </div>
            <div className="form-field">
                <button className='buttonabt' type="submit">Submit</button>
            </div>
        </form>
    </div>
</div>
   

    </div>
  )
}

export default About;
