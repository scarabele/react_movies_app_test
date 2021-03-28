import dotenv from 'dotenv';

export default {
  name: 'Movies',
  version: '1.0.0',
  extra: {meuenv: true},
  ...dotenv.config().parsed
};
