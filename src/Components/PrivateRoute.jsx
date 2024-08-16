import React from 'react';
import { Navigate } from 'react-router-dom';

// Function to check if user is authenticated
const checkAuth = () => {
  // Replace this with your actual authentication logic
  // For example, check if a token exists in local storage
  const token = localStorage.getItem('authToken');
  return !!token; // Returns true if token exists, false otherwise
};

const PrivateRoute = ({ children }) => {
  const isAuthenticated = checkAuth();
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;





