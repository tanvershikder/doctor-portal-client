import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth)

    console.log(user)

    return (
        <div>
            <h3 className="text-3xl text-center mt-10">Hi <span className='font-bold'>{user?.displayName}</span>, this is your Profile section</h3>
        </div>
    );
};

export default MyProfile;