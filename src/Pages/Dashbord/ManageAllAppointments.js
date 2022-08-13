import React, { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Home/Shared/Loading';
import { toast } from 'react-toastify';

const ManageAllAppointments = () => {


    const { data: appointments, isLoading, refetch } = useQuery('users', () => fetch('https://pacific-stream-06908.herokuapp.com/allbooking', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const hendelDelete = (id) => {

        const procide = window.confirm("are you sure ? you want to delete ?")

        if (id && procide) {
            fetch(`https://pacific-stream-06908.herokuapp.com/allbooking/${id}`,{
                method:"DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

            .then(res=>res.json())
            .then(data => {
                console.log(data);
                
                if (data.deletedCount) {
                    toast.success(`booking delete successfully`)
                    refetch()
                }
            })
        }

    }


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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((appointment, index) => <tr key={appointment._id} className='bg-slate-400'>
                                <td>{index + 1}</td>
                                <td>{appointment.patient}</td>
                                <td>{appointment.date}</td>
                                <th>{appointment.slot}</th>
                                <td>{appointment.treatment}</td>
                                <td>

                                    {(appointment.price && appointment.paid) && <div>
                                        <p><span className='text-success'>paid</span></p>
                                        <p>Transaction Id : <span className='text-success'>{appointment.transactionId}</span></p>
                                    </div>}
                                </td>
                                <td className='text-red-500'><button onClick={() => hendelDelete(appointment._id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllAppointments;