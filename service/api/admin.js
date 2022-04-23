const AdminAPI = [
  {
    name: 'boolAdmin',
    method: 'post',
    path: '/admin/login',
    options: {
      baseURL: 'http://localhost:8081',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      // withCredentials: false
    },
  },
];

export default AdminAPI;
