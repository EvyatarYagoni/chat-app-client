// config/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true, // Enable sending credentials (cookies) with every request
  baseURL: process.env.REACT_APP_SERVER_API_URL, // Set your base URL
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config before sending it

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
