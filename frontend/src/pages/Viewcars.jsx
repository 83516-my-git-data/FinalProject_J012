import React from 'react';
import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
import Contactus from '../components/Contactus';
import '../styles/Viewcars.css';

const ViewCars = () => {
    // Sample data for demonstration
    const cars = [
      { id: 1, name: 'Car 1', price: '$10,000', image: 'path/to/car1.jpg' },
      { id: 2, name: 'Car 2', price: '$15,000', image: 'path/to/car2.jpg' },
      { id: 3, name: 'Car 3', price: '$20,000', image: 'path/to/car3.jpg' },
      // Add more car data as needed
    ];
  
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
                  <img src={car.image} alt={car.name} />
                  <h2>{car.name}</h2>
                  <p>{car.price}</p>
                  <button className="buy-button">Buy Now</button>
                </div>
              ))}
            </div>
            <h1>Recently Added Cars</h1>
            <div className="car-list">
              {cars.map(car => (
                <div key={car.id} className="car-item">
                  <img src={car.image} alt={car.name} />
                  <h2>{car.name}</h2>
                  <p>{car.price}</p>
                  <button className="buy-button">Buy Now</button>
                </div>
              ))}
            </div>
            <h1>Discounted Cars</h1>
            <div className="car-list">
              {cars.map(car => (
                <div key={car.id} className="car-item">
                  <img src={car.image} alt={car.name} />
                  <h2>{car.name}</h2>
                  <p>{car.price}</p>
                  <button className="buy-button">Buy Now</button>
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
