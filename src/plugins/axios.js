import axios from 'axios';
import { getToken } from '../common/jwt.service';

const BASE_API = process.env.VUE_APP_API_URl;

const api = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  err => Promise.reject(err)
);

export default api;
