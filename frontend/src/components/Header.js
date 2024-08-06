import React from 'react';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <FaCar className="header-icon" />
      <span className="header-text">R E F U R B E D W H E E L S . C O M</span>
      <div className="header-links">
        <Link to="/login" className="header-link">Login</Link>
        <Link to="/register" className="header-link">Register</Link>
      </div>
    </div>
  );
};

export default Header;
