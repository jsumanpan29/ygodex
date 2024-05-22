import axios from "axios";

// const baseURL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : "http://localhost:8000/api";
const baseURL = 'https://db.ygoprodeck.com/api/v7'
// console.log("PROD: "+import.meta.env.PROD)
const API = axios.create({
  baseURL,
//   withCredentials: true,
});

export default API