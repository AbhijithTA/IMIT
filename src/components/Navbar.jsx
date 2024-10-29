// src/components/Navbar.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/CompanyLogo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/'); 
    localStorage.clear();
    window.location.reload(); 
  };

  const handleLogin = () => {
    navigate('/login'); 
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center space-x-2">
        <a href="/">
          <img src={logo} alt="Logo" className="w-20 h-20" />
        </a>
      </div>

      <ul className="hidden sm:flex space-x-6 text-lg">
        <li>
          <a href="/" className="hover:text-red-500 transition duration-200">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-red-500 transition duration-200">
            Gallery
          </a>
        </li>
      </ul>

      {user ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
