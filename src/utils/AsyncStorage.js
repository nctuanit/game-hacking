import AsyncStorage from '@react-native-async-storage/async-storage';

const LOCAL_STORAGE_AUTH_KEY = 'LOCAL_STORAGE_AUTH_KEY';
export const LOCAL_STORAGE_FCM_TOKEN = 'LOCAL_STORAGE_FCM_TOKEN';

export const setToken = token => {
  AsyncStorage.setItem(LOCAL_STORAGE_AUTH_KEY, token);
};
export const getToken = async () => {
  const jwtToken = await AsyncStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
  return jwtToken || null;
};
export const removeToken = () => {
  AsyncStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
};
