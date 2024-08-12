import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Contactus from '../components/Contactus';
import '../styles/Auth.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaArrowLeft, FaPhone, FaKey } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    mobilenumber: '', // Correct field name
    adminKey: '' // Add state for admin key
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!formData.email || !isValidEmail) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.role) {
      newErrors.role = 'Role is required';
    }

    if (!formData.mobilenumber) {
      newErrors.mobilenumber = 'Mobile number is required';
    } else {
      const isValidMobile = /^\d{10}$/.test(formData.mobilenumber); // Assuming a 10-digit mobile number
      if (!isValidMobile) {
        newErrors.mobilenumber = 'Invalid mobile number';
      }
    }

    if (formData.role === 'admin' && !formData.adminKey) {
      newErrors.adminKey = 'Admin key is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      if (formData.role === 'admin' && formData.adminKey !== 'Air@150') {
        toast.error('You are not allowed to register as an admin');
        return;
      }

      setIsSubmitting(true);
      try {
        const formattedFormData = { ...formData, role: formData.role.toUpperCase() };
        const response = await axios.post('http://localhost:8080/api/users/register', formattedFormData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Registration successful:', response.data);

        toast.success('Registration completed successfully!');

        setTimeout(() => {
          navigate('/login');
        }, 2000); // Adjust delay as needed

      } catch (error) {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
        setErrors({ ...errors, api: error.response ? error.response.data.message : 'Registration failed. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="auth-container">
        <div className="back-arrow" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </div>
        <div className="auth-box">
          <h2>Register</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <span className="input-icon"><FaUser /></span>
              <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-text">{errors.firstName}</span>}
            </div>

            <div className="input-group">
              <span className="input-icon"><FaUser /></span>
              <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-text">{errors.lastName}</span>}
            </div>

            <div className="input-group">
              <span className="input-icon"><FaEnvelope /></span>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <span className="input-icon"><FaLock /></span>
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="input-group">
              <span className="input-icon"><FaLock /></span>
              <input 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>

            <div className="input-group">
              <span className="input-icon"><FaPhone /></span>
              <input 
                type="text" 
                name="mobilenumber" 
                placeholder="Mobile Number" 
                value={formData.mobilenumber}
                onChange={handleChange}
                className={errors.mobilenumber ? 'error' : ''}
              />
              {errors.mobilenumber && <span className="error-text">{errors.mobilenumber}</span>}
            </div>

            <div className="role-selection">
              <label>
                <input 
                  type="radio" 
                  name="role" 
                  value="admin" 
                  checked={formData.role === 'admin'} 
                  onChange={handleChange} 
                />
                Admin
              </label>
              <label>
                <input 
                  type="radio" 
                  name="role" 
                  value="user" 
                  checked={formData.role === 'user'} 
                  onChange={handleChange} 
                />
                User
              </label>
              {errors.role && <span className="error-text">{errors.role}</span>}
            </div>

            {formData.role === 'admin' && (
              <div className="input-group">
                <span className="input-icon"><FaKey /></span>
                <input 
                  type="password" 
                  name="adminKey" 
                  placeholder="Admin Key" 
                  value={formData.adminKey}
                  onChange={handleChange}
                  className={errors.adminKey ? 'error' : ''}
                />
                {errors.adminKey && <span className="error-text">{errors.adminKey}</span>}
              </div>
            )}

            <button type="submit" className="auth-button" disabled={isSubmitting}>
              Register
            </button>
          </form>
          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
      <Contactus />
      <ToastContainer />
    </div>
  );
};

export default Register;
