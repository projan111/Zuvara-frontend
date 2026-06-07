import axios from "axios";

// Create axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || "https://zuvara-api.webxnepal.com/api/v1/",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - add auth token if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          // Unauthorized - redirect to login
          console.error("Unauthorized access");
          break;
        case 403:
          // Forbidden
          console.error("Access forbidden");
          break;
        case 404:
          // Not found
          console.error("Resource not found");
          break;
        case 500:
          // Server error
          console.error("Server error");
          break;
        default:
          console.error("API Error:", error.response.data);
      }
    } else if (error.request) {
      // Request made but no response
      console.error("No response from server");
    } else {
      // Something else happened
      console.error("Request error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
