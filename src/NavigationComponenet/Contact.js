import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
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
            <div className="image-container">
                <img src="Contact.jpg" alt="Image Description" className="image" />
                <div className="text-overlay">
                    <h1>Contact</h1>
                    <div className='abouthead'>
                        <Link to="/" className='aboutmainhead'>Home</Link>
                        <span>{'>'} Contact</span>
                    </div>

                </div>
            </div>
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

            <div className="Aitemform">
                <form id="contactForm" onSubmit={handleSubmit}>
                    <input
                        className="Ain"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                    <br />

                    <input
                        className="Ain"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                    <br />

                    <input
                        className="Ain"
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                    <br />

                    <select
                        className="Ain"
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
                        className="Ain"
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
                        className="Ain"
                        name="message"
                        placeholder="Type Your message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                    <br />

                    <button className="Ain" type="submit">Send</button>
                </form>
            </div>



            </div>
    )
}

export default Contact
