import React from 'react';
import Service from './Service/Service';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import InfoBanner from '../Info/InfoBanner/InfoBanner';
import treatment from '../../../assets/images/treatment.png'

const Services = () => {
    return (
        <div className='mt-28'>
            <h3 className='text-center text-primary font-bold text-2xl uppercase'>Our Service</h3>
            <h3 className='text-center text-3xl'>Service We Provide</h3>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <Service cartTitle={"Flourida Treatment"} img={flouride}></Service>
                <Service cartTitle={"Cavity Filling"} img={cavity}></Service>
                <Service cartTitle={"Teeth Whitening"} img={whitening}></Service>
            </div>
            <div>
                <InfoBanner img={treatment}></InfoBanner>
            </div>
        </div>
    );
};

export default Services;