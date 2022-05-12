import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointBanner = ({newdata,setNewdate}) => {
    
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='pr-10'>
                    <DayPicker
                        mode="single"
                        selected={newdata}
                        onSelect={setNewdate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointBanner;