import React, { createContext, useState, useEffect } from "react";
import { validateToken } from '../api';
// Set globally to send cookies with every request


// Create the AuthContext
export const AuthContext = createContext();

// AuthContext Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  console.log(isAuthenticated,"done")
  const checkAuth = async () => {
    try {
      const response = await validateToken()
      if (response?.statusText) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error validating token:', error.message);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
     checkAuth()
  }, []);

  return (
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
      {children}
    </AuthContext.Provider>
  );
};
