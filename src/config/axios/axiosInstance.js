// config/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true, // Enable sending credentials (cookies) with every request
  baseURL: process.env.REACT_APP_SERVER_API_URL, // Set your base URL
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
});

// if accessToken is invalid send to /auth/refresh-token to get a new one and save it on localStorage.
// if refreshToken is invalid send to /auth/logout to clear cookies and remove refreshToken from database and redirect to login page

axiosInstance.interceptors.request.use(

)

export default axiosInstance;
