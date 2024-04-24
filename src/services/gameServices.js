import AxiosClient from './AxiosClient';

const API_ENDPOINT = 'game/';

export const getListGameById = id => {
  return AxiosClient.get(API_ENDPOINT + `${id}/list`);
};
