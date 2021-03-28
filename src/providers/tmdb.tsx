const axios = require('axios');
import Constants from 'expo-constants';
export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const tmdb = axios.create({
  baseURL: Constants.manifest.TMDB_URL
});

tmdb.interceptors.request.use(function (config: any) {
  config.params = {
    ...config.params,
    api_key: Constants.manifest.TMDB_KEY,
    language: 'pt-BR'
  };
  return config;
}, function (error: any) {
  return Promise.reject(error);
});

export default tmdb;
