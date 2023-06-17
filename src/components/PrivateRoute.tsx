import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'src/store';

const PrivateRoute = ({children}:any) => {
    const {isAdminAuth} = useAppSelector(state=>state.adminProductReducer)
  
     return   localStorage.getItem("currentUser")?children:<Navigate to="/admin-login"/>
}

export default PrivateRoute;
