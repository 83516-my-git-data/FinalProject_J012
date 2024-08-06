import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const AddCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send formData to backend
    console.log(formData);
  };

    return (

      <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="container mt-5">
      <h1 style={{textAlign:'center'}} className="mb-4">Post a New Car</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="make">Make</label>
          <input
            type="text"
            className="form-control"
            id="make"
            name="make"
            value={formData.make}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            className="form-control"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            className="form-control"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
                    </div>
                    <br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
            </div>
            </div>
  );
};

export default AddCar;
