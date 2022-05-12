import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import Button from '../Shared/Button/Button';
import './Subcription.css'

const Subcription = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`
            }}
            className='text-center my-20 py-10'>
            <div className='pb-10'>
                <p className='text-primary '>Contact Us</p>
                <h2 className='text-white text-4xl'>Stay connect With Us</h2>
            </div>
            <div className=' justify-items-center'>
                <div className='inputs'>
                    <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs block " />
                    <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs block" />
                    <textarea className="textarea textarea-bordered block lg:w-80 w-full h-32" placeholder="Your message"></textarea>
                </div>
                <Button>Submit</Button>
            </div>
        </div>
    );
};

export default Subcription;