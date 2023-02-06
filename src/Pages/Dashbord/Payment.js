import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Home/Shared/Loading';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe('pk_test_51L0VYqIjoDmdgvDrUO0C5ZUrgLT9Zdi3bmtGi5P95AABblBLQEXmfm5ME6oo9BAe3n8mpbP4pdQEFYjWaYtPF7sV00p5YqAipF');

const Payment = () => {
    const { appointmentId } = useParams()
    const url = `https://doctor-portal-server-kbzx.vercel.app/bookings/${appointmentId}`

    const { data: appointment, isLoading } = useQuery(['booking', appointmentId], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const { patientName, treatment, date, price } = appointment;

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-lg my-12">
                <div className="card-body">
                    <p className='text-success'> Hellow ,{patientName}</p>
                    <h2 className="card-title">
                        please pay for {treatment}
                    </h2>
                    <p>we will see you on <span className='text-orange-700'>{date}</span></p>
                    <p>please pay ${price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shasow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise} >
                        <CheckoutFrom appointment={appointment}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;