import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthContext } from './Authcontext';


const PrivateRouters: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();

  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ data: location.pathname }} />;
  }

  return children;
};

export default PrivateRouters;
