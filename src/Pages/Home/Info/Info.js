import React from 'react';
import Cartinfo from './CartInfo/Cartinfo';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Cartinfo cartTitle={"Opening Hours"} cardbg={"bg-gradient-to-r from-secondary to-primary"} img={phone}></Cartinfo>
                <Cartinfo cartTitle={"Our Location"} cardbg={"bg-[#3A4256]"} img={clock}></Cartinfo>
                <Cartinfo cartTitle={"Contact Us"} cardbg={"bg-gradient-to-r from-secondary to-primary"} img={marker}></Cartinfo>
            </div>
            
        </div>
    );
};

export default Info;