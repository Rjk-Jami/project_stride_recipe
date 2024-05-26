import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAuth = () => {
    
    const useAuth = useContext(AuthContext)
    return useAuth
};

export default useAuth;