import Axios from 'axios';

const axios = Axios.create({ baseURL: import.meta.env.VITE_BACKEND_URL, withCredentials: true });
const tokens = JSON.parse(localStorage.getItem('tokens') ?? '{}');

axios.interceptors.request.use(
  (config) => {
    if (tokens.accessToken) {
      config.headers['Authorization'] = 'Bearer ' + tokens.accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axios;
