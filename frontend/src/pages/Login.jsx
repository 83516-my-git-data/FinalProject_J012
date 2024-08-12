import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Contactus from '../components/Contactus';
import '../styles/Auth.css';
import { FaUser, FaLock } from 'react-icons/fa';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
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
            try {
                const response = await axios.post('http://localhost:8080/api/users/login', formData);
                console.log('Login successful:', response.data);
                Toastify({
                    text: "Login successful",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "#4CAF50"
                }).showToast();
                navigate('/');
            } catch (error) {
                console.error('Login failed:', error.response?.data || error.message);
                Toastify({
                    text: "Login failed: " + (error.response?.data || error.message),
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "#FF0000"
                }).showToast();
            }
        }
    };

    return (
        <div>
            <Header />
            <div className="auth-container">
                <div className="auth-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="input-group">
                            <span className="input-icon"><FaUser /></span>
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

                        <button type="submit" className="auth-button">
                            Login
                        </button>
                    </form>
                    <p className="register-link">
                        New user? <Link to="/register">Register here</Link>
                    </p>
                </div>
            </div>
            <Contactus />
        </div>
    );
};

export default Login;
