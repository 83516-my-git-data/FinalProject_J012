// src/pages/AddCarForm.js
import React, { useState } from 'react';
import '../styles/AddCarForm.css';
import { CgEnter } from 'react-icons/cg';
import Header from '../components/Header';
import Contactus from '../components/Contactus';

const AddCarForm = () => {
  const [car, setCar] = useState({
    location: '',
    makeYear: '',
    makeMonth: '',
    make: '',
    model: '',
    fuelSelection: '',
    version: '',
    color: '',
    alternateFuel: '',
    owner: '',
    kilometersDriven: '',
    expectedPrice: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setCar({ ...car, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(car);
    // You can add your form submission logic here
  };

  return (
    <div>
      <Header/>

    
    <div className="form-container mt-5">
      
      <h2>Add Car Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group form-group-half">
            <label>Location</label>
            <input type="text" name="location" value={car.location} onChange={handleChange} required />
          </div>
          <div className="form-group form-group-half">
            <label>Make Year</label>
            <input type="number" name="makeYear" value={car.makeYear} onChange={handleChange} required />
          </div>
        </div>
        <div className="row">
          <div className="form-group form-group-half">
            <label>Make Month</label>
            <input type="text" name="makeMonth" value={car.makeMonth} onChange={handleChange} required/>
          </div>
          <div className="form-group form-group-half">
            <label>Make</label>
            <input type="text" name="make" value={car.make} onChange={handleChange}required />
          </div>
        </div>
        <div className="row">
          <div className="form-group form-group-half">
            <label>Model</label>
            <input type="text" name="model" value={car.model} onChange={handleChange} required/>
          </div>
          <div className="form-group form-group-half">
            <label>Fuel Selection</label>
            <input type="text" name="fuelSelection" value={car.fuelSelection} onChange={handleChange}required />
          </div>
        </div>
        <div className="row">
          <div className="form-group form-group-half">
            <label>Version</label>
            <input type="text" name="version" value={car.version} onChange={handleChange} required/>
          </div>
          <div className="form-group form-group-half">
            <label>Color</label>
            <input type="text" name="color" value={car.color} onChange={handleChange}required />
          </div>
        </div>
        <div className="row">
          <div className="form-group form-group-half">
            <label>Alternate Fuel</label>
            <input type="text" name="alternateFuel" value={car.alternateFuel} onChange={handleChange}required />
          </div>
          <div className="form-group form-group-half">
            <label>Owner</label>
            <input type="text" name="owner" value={car.owner} onChange={handleChange} required/>
          </div>
        </div>
        <div className="row">
          <div className="form-group form-group-half">
            <label>Kilometers Driven</label>
            <input type="number" name="kilometersDriven" value={car.kilometersDriven} onChange={handleChange} required/>
          </div>
          <div className="form-group form-group-half">
            <label>Expected Selling Price</label>
            <input type="number" name="expectedPrice" value={car.expectedPrice} onChange={handleChange} required/>
          </div>
        </div>
        <div className="form-group form-group-full">
          <label>Car Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange}required />
        </div>
        <button type="submit" className="submit-btn">Post Your Ad</button>
      </form>
    </div>
     <Contactus/>
    </div>
  );
};

export default AddCarForm;
