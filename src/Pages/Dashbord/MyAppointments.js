import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Home/Shared/Loading'

const MyAppointments = () => {
    const [appointments, setAppointment] = useState([])
    const navigate = useNavigate()

    const [user] = useAuthState(auth)


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res ', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken")
                        toast.error("unAuthorized user")
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointment(data)
                })
        }
    }, [user])
console.log(appointments);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>TreatMent</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((appointment, index) => <tr key={appointment._id}>
                                <td>{index + 1}</td>
                                <td>{appointment.patient}</td>
                                <td>{appointment.date}</td>
                                <th>{appointment.slot}</th>
                                <td>{appointment.treatment}</td>
                                <td>
                                    {(appointment.price && !appointment.paid) && <Link to={`payment/${appointment._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(appointment.price && appointment.paid) && <div>
                                        <p><span className='text-success'>paid</span></p>
                                        <p>Transaction Id : <span className='text-success'>{appointment.transactionId}</span></p>
                                        </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;