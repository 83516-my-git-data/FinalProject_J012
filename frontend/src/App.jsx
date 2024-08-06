import { Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage'
import Terms from "./pages/Terms";
import AddCar from "./pages/Addcar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/Landingpage";



function App() {
  return <div className='container'>
    <Routes>
      <Route path='/' />
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/landingpage' element={<LandingPage />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/addcar' element={<AddCar/>} />
    </Routes>
  </div>
}

export default App;

