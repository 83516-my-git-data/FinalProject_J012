import React, { useState } from 'react';
import '../styles/AddCarForm.css';
import { CgEnter } from 'react-icons/cg';
import Header from '../components/Header';
import Contactus from '../components/Contactus';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCarForm = () => {
  const [car, setCar] = useState({
    userid: '',
    make: '',
    model: '',
    yearofpurchase: '',
    kmdriven: '',
    mileage: '',
    vehicleNumber: '',
    varient: '',
    ownership: '',
    location: '',
    askingPrice: '',
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
    } else {
      toast.error('Please upload a valid image file.');
    }
  };

  const validateForm = () => {
    const { userid, make, model, yearofpurchase, kmdriven, mileage, vehicleNumber, varient, ownership, location, askingPrice } = car;
    if (!userid || !make || !model || !yearofpurchase || !kmdriven || !mileage || !vehicleNumber || !varient || !ownership || !location || !askingPrice) {
      toast.error('Please fill in all required fields.');
      return false;
    }

    if (kmdriven <= 0 || askingPrice <= 0) {
      toast.error('Kilometers Driven and Asking Price must be greater than 0.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();

      // Append the DTO as a JSON string
      formData.append('dto', JSON.stringify({
        userid: car.userid,
        make: car.make,
        model: car.model,
        yearofpurchase: car.yearofpurchase,
        kmdriven: car.kmdriven,
        mileage: car.mileage,
        vehicleNumber: car.vehicleNumber,
        varient: car.varient,
        ownership: car.ownership,
        location: car.location,
        askingPrice: car.askingPrice
      }));

      // Append the image file
      if (car.image) {
        formData.append('image', car.image);
      }

      try {
        const response = await fetch('http://localhost:8080/vehicle/add/all', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          toast.success('Car details submitted successfully!');
          setCar({
            userid: '',
            make: '',
            model: '',
            yearofpurchase: '',
            kmdriven: '',
            mileage: '',
            vehicleNumber: '',
            varient: '',
            ownership: '',
            location: '',
            askingPrice: '',
            image: null
          });
        } else {
          const result = await response.json();
          toast.error(result.message || 'Failed to submit car details.');
        }
      } catch (error) {
        toast.error('An error occurred while submitting the form.');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div>
      <Header />

      <div className="form-container mt-5">
        <h2>Add Car Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group form-group-half">
              <label>User ID</label>
              <input type="text" name="userid" value={car.userid} onChange={handleChange} required />
            </div>
            <div className="form-group form-group-half">
              <label>Location</label>
              <input type="text" name="location" value={car.location} onChange={handleChange} required />
            </div>
          </div>
          <div className="row">
            <div className="form-group form-group-half">
              <label>Make</label>
              <input type="text" name="make" value={car.make} onChange={handleChange} required />
            </div>
            <div className="form-group form-group-half">
              <label>Model</label>
              <input type="text" name="model" value={car.model} onChange={handleChange} required />
            </div>
          </div>
          <div className="row">
            <div className="form-group form-group-half">
              <label>Year of Purchase</label>
              <input type="date" name="yearofpurchase" value={car.yearofpurchase} onChange={handleChange} required />
            </div>
            <div className="form-group form-group-half">
              <label>Kilometers Driven</label>
              <input type="number" name="kmdriven" value={car.kmdriven} onChange={handleChange} required />
            </div>
          </div>
          <div className="row">
            <div className="form-group form-group-half">
              <label>Mileage</label>
              <input type="number" name="mileage" value={car.mileage} onChange={handleChange} required />
            </div>
            <div className="form-group form-group-half">
              <label>Vehicle Number</label>
              <input type="text" name="vehicleNumber" value={car.vehicleNumber} onChange={handleChange} required />
            </div>
          </div>
          <div className="row">
            <div className="form-group form-group-half">
              <label>Variant</label>
              <input type="text" name="varient" value={car.varient} onChange={handleChange} required />
            </div>
            <div className="form-group form-group-half">
              <label>Ownership</label>
              <input type="number" name="ownership" value={car.ownership} onChange={handleChange} required />
            </div>
          </div>
          <div className="row">
            <div className="form-group form-group-half">
              <label>Asking Price</label>
              <input type="number" name="askingPrice" value={car.askingPrice} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group form-group-full">
            <label>Car Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} required />
          </div>
          <button type="submit" className="submit-btn">Post Your Ad</button>
        </form>
      </div>
      <Contactus />
      <ToastContainer />
    </div>
  );
};

export default AddCarForm;
