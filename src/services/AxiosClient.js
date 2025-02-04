import axios from 'axios';
import {parse, stringify} from 'qs';
import {getToken} from '../utils/AsyncStorage';

const API_ENDPOINT = 'https://api.hackinggame.tuannc.com/';

const AxiosClient = axios.create({
  baseURL: API_ENDPOINT,
  responseType: 'json',
  timeout: 50000,
  paramsSerializer: {
    encode: parse,
    serialize: stringify,
  },
});

AxiosClient.interceptors.request.use(
  async config => {
    const newConfig = config;
    try {
      const token = await getToken();
      newConfig.headers.Authorization = `Bearer ${token}`;
    } catch {}
    return newConfig;
  },
  error => {
    return Promise.reject(error);
  },
);

export default AxiosClient;
