import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Contactus from '../components/Contactus';
import '../styles/Viewcars.css';

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/vehicle')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching car details:', error));
  }, []);

  const handleBuyNow = (id) => {
    navigate(`/vehicle/${id}`);
  };

  return (
    <div className="view-cars-page">
      <Header />
      <div className="main-content">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="car-list-section">
          <h1>Featured Cars</h1>
          <div className="car-list">
            {cars.map(car => (
              <div key={car.id} className="car-item">
                <img src={car.images[0]} alt={car.make} />
                <h2>{car.make}</h2>
                <p>Rs. {car.askingPrice}</p>
                <p hidden>{car.id}</p>
                <button className="buy-button" onClick={() => handleBuyNow(car.id)}>Buy Now</button>
              </div>
            ))}
          </div>
          <h1>Recently Added Cars</h1>
          <div className="car-list">
            {cars.map(car => (
              <div key={car.id} className="car-item">
                <img src={car.images[0]} alt={car.make} />
                <h2>{car.make}</h2>
                <p>Rs. {car.askingPrice}</p>
                <button className="buy-button" onClick={() => handleBuyNow(car.id)}>Buy Now</button>
              </div>
            ))}
          </div>
          <h1>Discounted Cars</h1>
          <div className="car-list">
            {cars.map(car => (
              <div key={car.id} className="car-item">
                <img src={car.images[0]} alt={car.make} />
                <h2>{car.make}</h2>
                <p>Rs. {car.askingPrice}</p>
                <button className="buy-button" onClick={() => handleBuyNow(car.id)}>Buy Now</button>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      <Contactus />
    </div>
  );
};

export default ViewCars;
