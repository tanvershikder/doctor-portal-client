import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AvailableServicesCart from './AvailableServicesCart';
import BookingModal from './BookingModal';
import Loading from '../Home/Shared/Loading'

const AvailableAppointment = ({date}) => {
    const [treatment,setTreatment] = useState(null);
    const formetedDate = format(date,'PP');
    
    // fetch using react query that will help for reloading and refetch your data
    const {data:services,isLoading,refetch} = useQuery(['available',formetedDate],()=> fetch(`http://localhost:5000/available?date=${formetedDate}`)
        .then(res=> res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <p className='text-center text-secondary text-2xl'>Available Appointment on {format(date,'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
                {
                    services?.map(service=><AvailableServicesCart key={service._id} setTreatment={setTreatment} service={service}></AvailableServicesCart>)
                }
            </div>
            {treatment && <BookingModal
             treatment={treatment}
             date={date}
             setTreatment={setTreatment}
             refetch={refetch}
             ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;