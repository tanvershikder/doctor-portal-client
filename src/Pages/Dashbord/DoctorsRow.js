import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch,setDeleteDoctor }) => {
    const { img, name, specalist, email } = doctor;

    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specalist}</td>
            <td>
                <label onClick={()=>setDeleteDoctor(doctor)} for="dlete-modal" class="btn modal-button btn-xs  btn-error">Delete</label>
                
            </td>
        </tr>
    );
};

export default DoctorsRow;