import axios from 'axios';

import { getAuthByStorage } from 'contexts/AuthContext';

/**
 * Get API base
 */
export function API() {
  let headers = {};
  const auth = getAuthByStorage();

  if (auth) {
    headers = {
      Authorization: `Bearer ${auth.token}`,
    }
  }

  return axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    headers,
  });
}

export default API;
