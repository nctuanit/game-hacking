import AxiosClient from './AxiosClient';

const API_ENDPOINT = 'transaction';

export const getCurrenTransaction = id => {
  return AxiosClient.get(API_ENDPOINT + `/${id}`);
};

export const byTimeTransaction = id => {
  return AxiosClient.post(API_ENDPOINT + `/${id}`);
};
