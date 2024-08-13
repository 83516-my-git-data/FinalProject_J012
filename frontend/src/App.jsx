import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Terms from "./pages/Terms";
import AddCar from "./pages/Addcar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/Landingpage";
import AddCarForm from './pages/AddCarForm';
import CarDetails from './pages/CarDetails';
import ViewCars from "./pages/Viewcars";

const sampleCar = {
  image: 'https://example.com/car-image.jpg', // replace with actual image URL
  year: '2018',
  make: 'Hyundai',
  model: 'Creta',
  kilometers: '40,000',
  fuelType: 'Petrol',
  location: 'Delhi',
  price: 'Rs. 9.9 Lakh',
  specifications: [
    { name: 'Engine', value: '1591 cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC' },
    { name: 'Engine Type', value: 'Petrol Dual VTVT' },
    { name: 'Fuel Type', value: 'Petrol' },
    { name: 'Max Power (bhp@rpm)', value: '122 bhp @ 6400 rpm' },
    { name: 'Max Torque (Nm@rpm)', value: '154 Nm @ 4850 rpm' },
    { name: 'Mileage (ARAI)', value: '15.29 kmpl' },
    { name: 'Drivetrain', value: 'FWD' },
    { name: 'Transmission', value: 'Automatic - 6 Gears' },
    { name: 'Turbocharger / Supercharger', value: 'No' }
  ]
};

function App() {
  return (
    <div className='container'>
      <Routes>
        {/* <Route path="/" element={<>Welcome to car buy sell</} /> */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/add-car" element={<AddCarForm />} />
        <Route path='/car-details' element={<CarDetails />} />
        <Route path='/viewcars' element={<ViewCars />} />
        <Route path="/vehicle/:id" component={CarDetails} />
      </Routes>
    </div>
  );
}

export default App;
