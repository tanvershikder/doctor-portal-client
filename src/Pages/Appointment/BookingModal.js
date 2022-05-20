import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;

    const [user, loading, error] = useAuthState(auth);

    const hendelSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        //    const phone=event.target.phone.value
        //    console.log(phone);
        // console.log(id,name,slot);

        // const ndate = date ? date : new Dat b

        const formettedDate = format(date,'PP');

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formettedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://pacific-stream-06908.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    toast.success(`Appointment is set , ${formettedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${slot}`)
                }
                refetch()
                setTreatment(null)
            })

        //to close the modal

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
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
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