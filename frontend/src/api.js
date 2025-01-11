import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000'; // Update with your backend URL
axios.defaults.withCredentials = true; 
// Register User
export const registerUser = async (userData) => {
    return axios.post(`${API_BASE_URL}/api/auth/register`, userData);
};

// Admin Login
export const loginUser = async (loginData) => {
    return axios.post(`http://localhost:5000/api/auth/login/admin`,loginData);
};

// token verification 

export const validateToken = async () => {
    return axios.post(`${API_BASE_URL}/api/auth/validateToken`);
};


export const logoutuser = async () => {
    return axios.post(`${API_BASE_URL}/api/auth/logout`);
};

