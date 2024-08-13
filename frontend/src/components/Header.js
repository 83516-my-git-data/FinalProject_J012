import React from 'react';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/Authcontext'; // Import your Auth context
import '../styles/Header.css';

const Header = () => {
    const { isAuthenticated, logout } = useAuth(); // Use your Auth context

    return (
        <div className="header">
            <FaCar className="header-icon" />
            <span className="header-text">R E F U R B E D W H E E L S . C O M</span>
            <div className="header-links">
                {!isAuthenticated ? (
                    <>
                        <Link to="/login" className="header-link">Login</Link>
                        <Link to="/register" className="header-link">Register</Link>
                    </>
                ) : (
                    <button onClick={logout} className="header-link logout-button">Logout</button>
                )}
            </div>
        </div>
    );
};

export default Header;
