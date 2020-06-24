import { API } from 'logic/api';

/**
 * Get Vehicles List
 * 
 * @returns {Object}
 */
export async function getVehicles() {
  const { data } = await API().get('/vehicle');

  return data;
}

/**
 * Create a New Vehicle
 * 
 * @param {String} plate 
 */
export async function createVehicle(plate) {
  return await API().post('/vehicle', {
    plate
  });
}

/**
 * Delete a Vehicle
 * 
 * @param {Number} id 
 */
export async function deleteVehicle(id) {
  return await API().delete(`/vehicle/${id}`);
}
