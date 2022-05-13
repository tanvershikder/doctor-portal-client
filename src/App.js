import './App.css';
import Navbar from './Pages/Home/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Review from './Pages/Review/Review';
import ContactUs from './Pages/Contact/ContactUs';
import Login from './Pages/Login/Login';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function App() {
  // theme change
  // useEffect(() => {
  //   themeChange(false)
  // }, [])
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="review" element={<Review />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
