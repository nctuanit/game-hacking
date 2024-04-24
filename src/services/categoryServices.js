import AxiosClient from './AxiosClient';

const API_ENDPOINT = 'category/';

export const getListCategory = () => {
  return AxiosClient.get(API_ENDPOINT + 'get/list');
};
