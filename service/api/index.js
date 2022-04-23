import admin from './admin';
import user from './user';

const APIList = [
  {
    fileName: 'admin',
    value: admin,
  },
  {
    fileName: 'user',
    value: user,
  },
];

const APIConfig = {};

APIList.forEach(api => {
  api.value.forEach(item => {
    APIConfig[`${api.fileName}/${item.name}`] = item;
  });
});

export default APIConfig;
