import axios from 'axios';

import { getAuthByStorage } from 'contexts/AuthContext';

/**
 * Get API base
 */
export function API() {
  let token;
  const auth = getAuthByStorage();
  if (auth) token = auth.token;

  return axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export default API;
