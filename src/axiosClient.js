import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
    // baseURL: import.meta.env.VITE_API_BASE_URL,
  });

  export default axiosClient;