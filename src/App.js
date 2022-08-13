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
import RequireAdmin from './Pages/Hooks/RequireAdmin';

import { ToastContainer } from 'react-toastify';
import Dashbord from './Pages/Dashbord/Dashbord';
import MyAppointments from './Pages/Dashbord/MyAppointments';
import MyReview from './Pages/Dashbord/MyReview';
import AllUsers from './Pages/Dashbord/AllUsers';
import AddDoctor from './Pages/Dashbord/AddDoctor';
import ManageDoctors from './Pages/Dashbord/ManageDoctors';
import Payment from './Pages/Dashbord/Payment';
import ManageAllAppointments from './Pages/Dashbord/ManageAllAppointments';

function App() {
  return (
    <div className='max-w-7xl mx-auto lg:px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="/dashbord" element={
          <RequireAuth>
            <Dashbord />
          </RequireAuth>
        } >
          
          <Route index element={<MyAppointments></MyAppointments>} />
          <Route path='payment/:appointmentId' element={<Payment></Payment>} />
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="allUsers" element={<RequireAdmin>
            <AllUsers></AllUsers>
          </RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>
          <Route path="managedoctor" element={<RequireAdmin>
            <ManageDoctors></ManageDoctors>
          </RequireAdmin>}></Route>
          <Route path="manageallappointment" element={<RequireAdmin>
            <ManageAllAppointments></ManageAllAppointments>
          </RequireAdmin>}></Route>
        </Route>
        <Route path="/review" element={<Review />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
