import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Home/Shared/Loading';
import useAdmin from './useAmdin';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user)
    const location = useLocation()

    if(loading || adminLoading){
        return <Loading></Loading>
    }

if(!user || !admin){
        toast.error("its is procted for admin")
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
};

export default RequireAuth;