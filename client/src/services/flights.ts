import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
console.log(import.meta.env.VITE_BASE_URL)

export const getFlights = async () => {
  
};
