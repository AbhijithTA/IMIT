// src/components/PrivateRoute.js
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user || JSON.parse(localStorage.getItem('user')) ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
