import React, { createContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getVehicles, createVehicle } from 'logic/requests/vehicle';

export const VehiclesContext = createContext({});

const defaultVehicles = [];

export function VehiclesProvider({ children }) {
  const [vehicles, setVehicles] = useState(defaultVehicles);
  const [errorList, setErrorList] = useState(false);
  const [errorPlateSubmit, setErrorPlateSubmit] = useState(false);
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

  useEffect(() => {
    fetch();
  }, [fetch]);

  const publicValue = {
    vehicles,
    errorList,
    loading,
    errorPlateSubmit,
    update: fetch,
    submitCreateVehicle,
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
