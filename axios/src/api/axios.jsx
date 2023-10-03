import axios from "axios";
import refresh from "../endpoint/refresh";
export const BASE_URL = "http://127.0.0.1:5000";

export default axios.create({
    baseURL:BASE_URL,
})

 export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
   if (config.headers.Authorization){
     config.headers.Authorization = `Bearer ${refresh()}`;
   }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

