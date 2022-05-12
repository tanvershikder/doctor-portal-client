import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableServicesCart from './AvailableServicesCart';
import BookingModal from './BookingModal';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <p className='text-center text-secondary text-2xl'>Available Appointment on {format(date,'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
                {
                    services.map(service=><AvailableServicesCart key={service._id} setTreatment={setTreatment} service={service}></AvailableServicesCart>)
                }
            </div>
            {treatment && <BookingModal
             treatment={treatment}
             date={date}
             setTreatment={setTreatment}
             ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;