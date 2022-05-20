import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import DeleteDoctorModal from './DeleteDoctorModal';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    
    const [deleteDoctor,setDeleteDoctor] = useState(null)

    const { data: doctors, isLoading ,refetch} = useQuery('doctor', () => fetch('https://pacific-stream-06908.herokuapp.com/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specalist</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((doctor, index) => <DoctorsRow
                             key={doctor._id} 
                             index={index} 
                             refetch={refetch}
                             setDeleteDoctor={setDeleteDoctor}
                             doctor={doctor}></DoctorsRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteDoctorModal
                deleteDoctor={deleteDoctor}
                setDeleteDoctor={setDeleteDoctor}
                refetch={refetch}
            ></DeleteDoctorModal>}
        </div>
    );
};

export default ManageDoctors;