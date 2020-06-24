import React, { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  getVehicles,
  createVehicle,
  deleteVehicle,
} from 'logic/requests/vehicle';

export const VehiclesContext = createContext({});

const defaultVehicles = [];

export function VehiclesProvider({ children }) {
  const [vehicles, setVehicles] = useState(defaultVehicles);
  const [errorList, setErrorList] = useState(false);
  const [errorPlateSubmit, setErrorPlateSubmit] = useState(false);
  const [errorPlateDelete, setErrorPlateDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    setErrorList(false);

    try {
      const { data } = await getVehicles();
      setVehicles(data);
    } catch (errors) {
      setErrorList(true);
    }

    setLoading(false);
  }, []);

  async function submitCreateVehicle(plate, successCallback) {
    setErrorPlateSubmit(false);
    try {
      await createVehicle(plate);
      if (successCallback) successCallback();
      fetch();
    } catch (errors) {
      setErrorPlateSubmit(true);
    }
  }

  async function submitDeleteVehicle(id, successCallback) {
    setErrorPlateDelete(false);
    try {
      await deleteVehicle(id);
      fetch();
      if (successCallback) successCallback();
    } catch (errors) {
      setErrorPlateDelete(true);
    }
  }

  const publicValue = {
    vehicles,
    errorList,
    loading,
    errorPlateSubmit,
    errorPlateDelete,
    update: fetch,
    submitCreateVehicle,
    submitDeleteVehicle,
  };

  return (
    <VehiclesContext.Provider value={publicValue}>
      {children}
    </VehiclesContext.Provider>
  );
}

VehiclesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VehiclesProvider;
