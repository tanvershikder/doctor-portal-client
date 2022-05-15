import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {

    const { data: users, isLoading ,refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

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
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=><UserRow 
                                key={user._id} 
                                user={user}
                                refetch={refetch}
                                ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;