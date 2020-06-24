import API from 'logic/api';

export async function authenticateRequest(email = 'frontend-dev@easycarros.com', password = 'Fr0nt3ndR0ck5!') {
  const { data } = await API().post('/auth', {
    email,
    password,
  });

  return data;
}
