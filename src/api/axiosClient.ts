import axios from 'axios';
import to from 'await-to-js';
import {
  getAccessToken,
  saveAccessToken,
  saveRefreshToken,
} from '../utils/storage';

const axiosClient = axios.create({
  // baseURL: 'http://10.0.2.2:3100/api/v1',
  baseURL: 'http://localhost:3100/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getAccessToken();
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  async function (error) {
    const originalRequest = error.config;
    if ([401, 403].includes(error.response.status) && !originalRequest._retry) {
      originalRequest._retry = true;
      const [err, response] = await to(
        axiosClient.get('/authentication/refresh-token'),
      );
      if (response && !err) {
        const { accessToken, refreshToken }: any = response;
        saveAccessToken(accessToken);
        saveRefreshToken(refreshToken);
        axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
        return axiosClient(originalRequest);
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error?.response?.data);
  },
);

export default axiosClient;
