import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CarDetails.css';
import Header from '../components/Header';
import Contactus from '../components/Contactus';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/vehicle/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCar(data);
      })
      .catch(error => console.error('Error fetching car details:', error));
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="car-details-container">
        <div className="car-header">
          {car.images && car.images.map((image, index) => (
            <img key={index} src={image} alt={`${car.model} image ${index + 1}`} className="car-image" />
          ))}
          <div className="car-info">
            <h2>{car.make} {car.model}</h2>
            <p>Year of Purchase: {new Date(car.yearOfPurchase).toLocaleDateString()}</p>
            <p>KM Driven: {car.kmDriven} km</p>
            <p>Mileage: {car.mileage} kmpl</p>
            <p>Vehicle Number: {car.vehicleNumber}</p>
            <p>Variant: {car.variant}</p>
            <p>Ownership: {car.ownership}</p>
            <p>Location: {car.location}</p>
            <h3>Asking Price: {car.askingPrice}</h3>
          </div>
        </div>
        <div className="contact-form">
          <h3>Get Seller Details</h3>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input type="text" placeholder="+91 Enter Mobile Number" />
            </div>
          </form>
        </div>
      </div>
      <hr />
      <Contactus />
    </div>
  );
};

export default CarDetails;
