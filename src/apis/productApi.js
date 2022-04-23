import axiosClient from './index';

const productApi = {
  getAll: (params) => {
    const url = 'api/products';
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `api/products/find/${id}`;
    return axiosClient.get(url);
  },
  recommend: (key) => {
    const url = `api/products/recommend/${key}`;
    return axiosClient.get(url);
  },
  search: (key) => {
    const url = `api/products/search/${key}`;
    return axiosClient.get(url);
  },
  put: (id, body) => {
    const url = `api/products/${id}`;
    return axiosClient.put(url, body);
  },
};

export default productApi;
