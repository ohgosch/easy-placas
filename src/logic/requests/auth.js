import API from 'logic/api';

/**
 * Authentication Request
 * 
 * @param {String} email 
 * @param {String} password 
 * @returns {Object}
 */
export async function authenticateRequest(email = 'frontend-dev@easyvehicleros.com', password = 'Fr0nt3ndR0ck5!') {
  const { data } = await API().post('/auth', {
    email,
    password,
  });

  return data;
}
