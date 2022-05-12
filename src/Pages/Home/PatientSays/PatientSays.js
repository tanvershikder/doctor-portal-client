import React, { useEffect, useState } from 'react';
import PatientCart from './PatientCart';
import qoute from '../../../assets/icons/quote.svg'

const PatientSays = () => {
    const [says, setSays] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setSays(data))
    }, [])

    return (
        <section>
            <div className='my-20 flex justify-between'>
                <div>
                    <p className='font-bold text-primary'>Testimonial</p>
                    <h2 className='text-4xl'>This is our Patient Says</h2>
                </div>
                <div className=''>
                    <img src={qoute} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    says.map(say => <PatientCart key={say.id} say={say}></PatientCart>)
                }
            </div>
        </section>
    );
};

export default PatientSays;