import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CarDetails.css';
import Header from '../components/Header';
import Contactus from '../components/Contactus';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [showContact, setShowContact] = useState(false); // State to toggle contact details

  useEffect(() => {
    fetch(`http://localhost:8080/vehicle/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const baseUrl = 'http://localhost:8080/images/';
        const updatedImages = data.images.map(image => image.replace('{car_buyand_sell.image}', baseUrl));
        setCar({ ...data, images: updatedImages });
      })
      .catch(error => console.error('Error fetching car details:', error));
  }, [id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header/>
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
            <h3>Asking Price: Rs. {car.askingPrice}</h3>
          </div>
        </div>

        <div className="seller-details">
          <button 
            className="show-contact-button" 
            onClick={() => setShowContact(!showContact)}
          >
            {showContact ? "Hide Contact Details" : "Show Contact Details"}
          </button>

          {showContact && (
            <div className="contact-info">
              <div className="seller-info">
                <div className="seller-name">
                  <span className="seller-icon">Seller Name: </span> {}
                  {car.user.firstname}
                </div>
                <div className="seller-phone">
                  <a href={`phone:${car.user.mobilenumber}`}>Mobile No: {car.user.mobilenumber}</a>
                </div>
              </div>
              <div className="contact-message">
                Your contact details have been shared with the seller.
              </div>
            </div>
          )}
        </div>
      </div>
      <hr/>
      <Contactus/>
    </div>
  );
};

export default CarDetails;
