import React from 'react';
import chair from '../../assets/images/chair.png'
import './Home.css'
import Info from './Info/Info';
import InfoAppointment from './InfoAppointment/InfoAppointment';
import PatientSays from './PatientSays/PatientSays';
import Services from './Services/Services';
import Button from './Shared/Button/Button';
import Footer from './Shared/Footer/Footer';
import Subcription from './Subcription/Subcription';


const Home = () => {
    return (
        <div className="">
            <div className="hero bg-scroll min-h-screen"  >
                <div className="hero-content flex-col lg:flex-row-reverse herobg">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="lg:py-6 lg:px-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>

           <Info></Info>
           <Services></Services>
           <InfoAppointment></InfoAppointment>
           <PatientSays></PatientSays>
           <Subcription></Subcription>
           <Footer></Footer>

        </div>
    );
};

export default Home;