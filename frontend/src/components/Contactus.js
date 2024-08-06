// src/components/Contactus.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/Contact.css';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    concerns: ''
  });
  const [emailError, setEmailError] = useState(''); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === 'email') {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
      setEmailError(isValid ? '' : 'Invalid email address');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError) {
      return; 
    }

    console.log(formData);

    setFormData({ name: '', email: '', subject: '', concerns: '' });
    setEmailError('');
  };

  return (
    <div className="mt-5 container contactus-container">
      <h2 className="text-center mb-4 contactus-title">Contact Us</h2> 
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm contactus-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Id</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
                required 
              />
              {emailError && <div className="invalid-feedback d-block">{emailError}</div>} 
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                className="form-control" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="concerns">Any Concerns</label>
              <textarea 
                className="form-control" 
                id="concerns" 
                name="concerns" 
                rows="3" 
                value={formData.concerns}
                onChange={handleChange}
                placeholder="Enter your concerns"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg rounded-pill mt-3 contactus-submit-btn" disabled={emailError}>
              <i className="fa fa-paper-plane me-2"></i> Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6 mt-4 mt-md-0 contactus-info"> 
          <h4 className="mb-3">Contact Info</h4>
          <p><i className="fa fa-envelope me-2"></i> sunbeaminfo@kd2.com</p>
          <p><i className="fa fa-phone me-2"></i> +91 9876543210</p>
          <p><i className="fa fa-map-marker me-2"></i> 203, Anuda Chambers, Shaniwar Peth, near Gujar Hospital, Karad, Maharashtra 415110</p>
          <h4 className="mt-4">Follow Us</h4>
          <a href="#" className="me-3 social-icon"><i className="fa fa-twitter"></i></a>
          <a href="#" className="me-3 social-icon"><i className="fa fa-facebook"></i></a>
          <a href="#" className="me-3 social-icon"><i className="fa fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
