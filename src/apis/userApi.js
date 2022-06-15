import axiosClient from './index';

const userApi = {
  getAll: (params) => {
    const url = 'api/user';
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `api/user/id/${id}`;
    return axiosClient.get(url);
  },
  getByEmail: (email) => {
    const url = `api/user/email`;
    return axiosClient.get(url, email);
  },
  register: (body) => {
    const url = 'api/user/register';
    return axiosClient.post(url, body);
  },
  login: (body) => {
    const url = 'api/user/login';
    return axiosClient.post(url, body);
  },
  update: (id) => {
    const url = `api/user/${id}`;
    return axiosClient.put(url);
  },
};

export default userApi;
