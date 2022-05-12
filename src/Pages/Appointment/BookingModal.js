import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date,setTreatment }) => {
    const {id,name,slots} = treatment;

    const [user, loading, error] = useAuthState(auth);

    const hendelSubmit = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(id,name,slot);

        //to close the modal
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for {name}</h3>
                    <form onSubmit={hendelSubmit} className='grid grid-cols-1 mt-2 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index)=><option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled value={user?.displayName || " "} placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email || " "} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;