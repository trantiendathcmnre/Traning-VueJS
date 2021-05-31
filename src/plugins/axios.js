import Vue from 'vue';
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
  response => {
    // console.log(response);

    return response.data;
  },
  error => {
    console.log(error.response.status);
    console.log(error.response);

    let msg = error.response.data?.message || error.response.data[0].error;

    if (error.response.status == 401) msg = 'Invalid username or password!';

    Vue.$toast.error(msg, { timeout: 5000 });
    return Promise.reject();
  }
);

export default api;
