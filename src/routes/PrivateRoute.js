import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { GetLoggedinUser } from '../contexts/AuthContext';

export default function PrivateRoute() {
    
    const user = GetLoggedinUser();

    
    
    // If selectedData, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user && Object.keys(user).length>0 ? <Outlet /> : <Navigate to="/" />;
}
