// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import api from '../config/api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (email, password) => {
    const response = await api.post('/login', { email, password });
    setUser(response.data.user);
    localStorage.setItem('user', JSON.stringify(response.data.user)); 
  };

  const logout = async () => {
    // await api.post('/logout');
    setUser(null);
    localStorage.removeItem('user'); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
