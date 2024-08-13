import React, { useEffect, useState } from 'react';
import Header from '../components/Header'; // Assuming you have a Header component
import '../styles/UserCars.css'; // Assuming you have a CSS file for styling

const UserCars = ({ userId }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch(`http://localhost:8080/vehicle/user/${userId}`)
    fetch(`http://localhost:8080/vehicle/user/1`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const baseUrl = 'http://localhost:8080/images/';
        const updatedCars = data.map(car => {
          const updatedImages = car.images.map(image => image.replace('{car_buyand_sell.image}', baseUrl));
          return { ...car, images: updatedImages };
        });
        setCars(updatedCars);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user cars:', error);
        setLoading(false);
      });
  }, [userId]);
  
  const handleDelete = (vehicleId) => {
    if (window.confirm('Are you sure you want to delete this vehicle? This action cannot be undone.')) {
      fetch(`http://localhost:8080/vehicle/delete/Image/${vehicleId}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete images');
          }
          return fetch(`http://localhost:8080/vehicle/${vehicleId}`, {
            method: 'DELETE'
          });
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete vehicle');
          }
          setCars(cars.filter(car => car.id !== vehicleId));
        })
        .catch(error => {
          console.error('Error deleting vehicle:', error);
          alert('Failed to delete vehicle. Please try again.');
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="user-cars-container">
        <h2>My Car(s) Listed For Sale</h2>
        {cars.length === 0 ? (
          <div className="no-cars-message">
            You don't have any car listed now.
          </div>
        ) : (
          <div className="car-list">
            {cars.map(car => (
              <div key={car.id} className="car-card">
                <div className="car-header">
                  {car.images && car.images.map((image, index) => (
                    <img key={index} src={image} alt={`${car.model} image ${index + 1}`} className="car-image-1" />
                  ))}
                </div>
                <div className="car-info">
                  <h3>{car.make} {car.model}</h3>
                  <p>Asking Price: Rs. {car.askingPrice}</p>
                  <button className="btn btn-danger" onClick={() => handleDelete(car.id)}>
                    Delete Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCars;
