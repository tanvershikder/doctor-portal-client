import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hooks/useAmdin';

const Dashbord = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashbord-slider" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <h2 className='text-3xl font-bold text-purple-500 p-5'>Welcome to your Dashbord</h2> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashbord-slider" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                <li><Link to='/dashbord'>My Profile</Link></li>
                    {
                        !admin && <>
                           
                            <li><Link to='/myappointments'>My Appointment</Link></li>
                            <li><Link to='/dashbord/review'>My Review</Link></li>
                        </>

                    }
                    {admin && <>
                        <li><Link to='/dashbord/allUsers'>All Users</Link></li>
                        <li><Link to='/dashbord/addDoctor'>Add a Doctor</Link></li>
                        <li><Link to='/dashbord/managedoctor'>Manage Doctors</Link></li>
                        <li><Link to='/dashbord/manageallappointment'>All Appointments</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashbord;