import axios from "axios";

// Set the backend base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api/v1", // your backend URL
  withCredentials: true, // important for cookies (accessToken, refreshToken)
});

export default API;
