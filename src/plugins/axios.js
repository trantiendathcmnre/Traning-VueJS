import Vue from 'vue';
import axios from 'axios';
import { getToken } from '../common/jwt.service';

const BASE_API = process.env.VUE_APP_API_URl;

const api = axios.create({
  baseURL: BASE_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  request => {
    if (!request.url.includes('signin') && !request.url.includes('signup')) {
      request.headers.Authorization = `Bearer ${getToken()}`;
    }
    // console.log(request);
    return request;
  },
  err => Promise.reject(err.response.data)
);

api.interceptors.response.use(
  response => response.data,
  error => {
    // if internet was interrupted -> error.response is undefined
    let msg = !error.response ? error.message : error.response.data?.message || error.response.data[0].error;

    Vue.$toast.error(msg, { timeout: 5000 });
    return Promise.reject();
  }
);

export default api;
