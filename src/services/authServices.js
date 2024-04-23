import AxiosClient from './AxiosClient';

const API_ENDPOINT = 'user';

export const register = data => {
  return AxiosClient.post(API_ENDPOINT + '/register', data);
};

export const login = data => {
  return AxiosClient.post(API_ENDPOINT + '/login', data);
};
