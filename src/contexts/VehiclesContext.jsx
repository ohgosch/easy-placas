import React, { createContext, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getVehicles } from 'logic/requests/vehicle';

export const VehiclesContext = createContext({});

const defaultVehicles = [];

export function VehiclesProvider({ children }) {
  const [vehicles, setVehicles] = useState(defaultVehicles);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(false);

    try {
      const { data } = await getVehicles();
      setVehicles(data);
    } catch (errors) {
      setError(true);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const publicValue = {
    vehicles,
    error,
    loading,
    update: fetch,
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
