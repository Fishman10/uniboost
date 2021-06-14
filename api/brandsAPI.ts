
import { get } from '../utils/fetch'

export const brandsAPI = {
  getBrands(token) {
    return get(`api/brands`, token);
  },
};

