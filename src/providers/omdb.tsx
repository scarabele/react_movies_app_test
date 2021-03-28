const axios = require('axios');
import Constants from 'expo-constants';
//import { OMDb_KEY, OMDB_URL } from '@env';

const omdb = axios.create({
  baseURL: Constants.manifest.OMDB_URL
});

omdb.interceptors.request.use(function (config: any) {
  config.params = {...config.params, apikey: Constants.manifest.OMDb_KEY}
  return config;
}, function (error: any) {
  return Promise.reject(error);
});

export default omdb;
