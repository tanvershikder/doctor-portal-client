import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import DeleteUserModal from './DeleteUserModal';
import UserRow from './UserRow';

const AllUsers = () => {

    const [deleteUser,setDeleteUser] = useState(null)
    console.log(deleteUser);

    const { data: users, isLoading ,refetch} = useQuery('users', () => fetch('https://doctor-portal-server-kbzx.vercel.app/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
console.log(users)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-2xl text-primary'>this is all users are {users?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=><UserRow 
                                key={user._id} 
                                user={user}
                                refetch={refetch}
                                setDeleteUser={setDeleteUser}
                                ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteUser && <DeleteUserModal
                deleteUser={deleteUser}
                setDeleteUser={setDeleteUser}
                refetch={refetch}
            ></DeleteUserModal>}
        </div>
    );
};

export default AllUsers;