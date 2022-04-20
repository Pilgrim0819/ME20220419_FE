import axios from 'axios';

import getToken from './utils/getToken';

axios.interceptors.request.use(
  function (config) {
    const token = getToken();

    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
