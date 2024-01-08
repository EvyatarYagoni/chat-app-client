// config/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true, // Enable sending credentials (cookies) with every request
  baseURL: process.env.REACT_APP_SERVER_API_URL // Set your base URL
});

export default axiosInstance;
