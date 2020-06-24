import { API } from 'logic/api';

export async function getVehicles() {
  const { data } = await API().get('/vehicle');
  return data;
}

export async function createVehicle(plate) {
  return await API().post('/vehicle', {
    plate
  });
}
