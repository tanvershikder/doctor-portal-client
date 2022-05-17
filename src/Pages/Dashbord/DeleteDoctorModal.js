import React from 'react';
import { toast } from 'react-toastify';

const DeleteDoctorModal = ({ setDeleteDoctor,refetch,deleteDoctor }) => {
    const { name,email } = deleteDoctor;

    const hendelDelete = () => {

        fetch(`http://localhost:5000/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted`)
                    setDeleteDoctor(null)
                    refetch()
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="dlete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are You Sure You Want to Dlete {name}!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button class="btn btn-xs btn-error" onClick={hendelDelete}>Delete</button>
                        <label for="dlete-modal" class="btn btn-xs">Cencel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteDoctorModal;