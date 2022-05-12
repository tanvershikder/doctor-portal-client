import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png'
import Button from '../Shared/Button/Button';

const InfoAppointment = () => {
    return (
        <section
         style={{
             background:`url(${appointment})`
         }} 
         className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-primary font-bold my-4'>Appointment</h3>
                <h2 className='text-white font-bold text-3xl my-4'>Make an Appointment Today</h2>
                <p className='text-white my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem voluptatem obcaecati! Fuga vel, vero distinctio minus autem repudiandae quod ducimus earum, iusto aliquid dicta architecto repellendus veniam a fugiat.</p>
                <Button>Get started</Button>
            </div>
        </section>
    );
};

export default InfoAppointment;