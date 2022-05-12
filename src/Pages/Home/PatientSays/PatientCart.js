import React from 'react';
import './PatientCart.css'

const PatientCart = ({ say }) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl p-5">
                <div className="card-body">
                    <p>{say.says}</p>
                </div>
                <div className='flex text-center justify-center'>
                    <img src={say.img} className="imgBorder" alt="Review" />
                    <div className='mt-4'>
                        <h2 className="card-title pl-5">{say.name}</h2>
                        <h2 className="text-1.5xl">{say.place}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientCart;