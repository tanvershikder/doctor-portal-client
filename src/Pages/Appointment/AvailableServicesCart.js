import React from 'react';
import Button from '../Home/Shared/Button/Button';

const AvailableServicesCart = ({ service,setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p className='text-xs'>
                    {
                        slots.length
                            ?
                            <span>{slots[0]}</span>
                            :
                            <span>Try Another Day</span>
                    }
                </p>
                <p className='text-xs'>{slots.length} {slots.length > 1 ? "spaces" : "space"} is Available</p>
                <div className="card-actions">
                    <label 
                    htmlFor="Booking-modal" 
                    className="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary" 
                    onClick={()=>setTreatment(service)}
                    disabled={slots.length === 0}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableServicesCart;