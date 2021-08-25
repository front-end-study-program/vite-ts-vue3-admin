import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import httpError from './httpError';
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    httpError.errorNotice(error);

    return Promise.reject(error);
  }
);

export default service;
