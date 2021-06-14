import { get } from '../utils/fetch'

export const productsAPI = {
  getProducts(token) {
    return get(`api/products`, token);
  },
};

