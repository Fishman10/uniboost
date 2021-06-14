import { get } from '../utils/fetch'

export const dealersAPI = {
  getDealers(token) {
    return get(`api/dealers`, token);
  },
};