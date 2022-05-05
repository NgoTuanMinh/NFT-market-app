import axios from 'axios';
import to from 'await-to-js';
import {
  getAccessToken,
  getRefreshToken,
  saveAccessToken,
  saveRefreshToken,
} from '../utils/storage';

const axiosClient = axios.create({
  baseURL: 'http://10.0.2.2:3100/api/v1',
  // baseURL: 'http://localhost:3100/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const accessToken = await getAccessToken();
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('error======11111111====', error?.response?.data);
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
      const refreshTokenGeted = await getRefreshToken();
      const [err, response] = await to(
        axiosClient.post('/authentication/refresh-token', {
          refreshToken: refreshTokenGeted,
        }),
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
    console.log('error====222222222======', error?.response?.data);
    return Promise.reject(error?.response?.data);
  },
);

export default axiosClient;
