import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <progress className="progress w-full mx-auto"></progress>
    }
    if (!user) {
        toast.error("Please Login first.")
        return <Navigate to='/login' state={{from: location}} replace={true} ></Navigate>
    }
    return children;
};

export default PrivateRoute;