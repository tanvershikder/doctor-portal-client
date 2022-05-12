import React, { useState } from 'react';
import Footer from '../Home/Shared/Footer/Footer';
import AppointBanner from './AppointBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointmet = () => {
    const [newdata, setNewdate] = useState(new Date());
    
    return (
        <div>
            <AppointBanner newdata={newdata} setNewdate={setNewdate}></AppointBanner>
            <AvailableAppointment date={newdata}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointmet;