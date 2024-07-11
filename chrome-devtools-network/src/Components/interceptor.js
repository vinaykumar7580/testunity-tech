import axios from "axios"
import { addRequest } from "../Redux/action"

const axiosInstance = axios.create();

export const setupInterceptors = (store) => {
    axiosInstance.interceptors.request.use((request) => {
      const startTime = Date.now();
      request.metadata = { startTime };
      return request;
    });
  
    axiosInstance.interceptors.response.use(
      (response) => {
        const endTime = Date.now();
        const duration = endTime - response.config.metadata.startTime;
        store.dispatch(addRequest({ ...response, duration }));
        return response;
      },
      (error) => {
        const endTime = Date.now();
        const duration = endTime - error.config.metadata.startTime;
        store.dispatch(addRequest({ ...error.response, duration }));
        return Promise.reject(error);
      }
    );
  };
  
  export default axiosInstance;