import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="budget">
        <h3>Budget</h3>
        <div className="slider">
          <input type="range" min="100000" max="2500000" step="10000" />
        </div>
        <div className="budget-values">
          <span>₹ 1,00,000</span>
          <span>₹ 25,00,000</span>
        </div>
        <div className="suggestions">
          <button>Under 3 lakh</button>
          <button>From 3 lakh - 5 lakh</button>
          <button>From 5 lakh - 7 lakh</button>
          <button>From 7 lakh - 10 lakh</button>
          <button>Above 10 lakh</button>
        </div>
      </div>
      <div className="filter">
        <h3>Make & Model</h3>
        <button>Model Year</button>
        <button>Kms Driven</button>
        <button>Fuel</button>
        <button>Body Type</button>
        <button>Transmission</button>
        <button>Color</button>
        <button>Fuel</button>
      </div>
    </div>
  );
};

export default Sidebar;
