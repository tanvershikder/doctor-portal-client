import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Home/Shared/Loading'

const MyAppointments = () => {
    const [appointments, setAppointment] = useState([])

    const [user] = useAuthState(auth)
   

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>TreatMent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((appointment,index) => <tr key={appointment._id}>
                                <td>{index+1}</td>
                                <td>{appointment.patient}</td>
                                <td>{appointment.date}</td>
                                <th>{appointment.slot}</th>
                                <td>{appointment.treatment}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;