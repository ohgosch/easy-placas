import React, { useContext } from 'react';

import { VehiclesContext } from 'contexts/VehiclesContext';

import { StatusTimeout } from './StatusTimeout';
import { StatusEmpty } from './StatusEmpty';

export function Status() {
  const { vehicles, error, loading } = useContext(VehiclesContext);
  const empty = !vehicles.length && !error && !loading;

  return (
    <>
      {empty && <StatusEmpty />}
      {error && <StatusTimeout />}
    </>
  );
}

Status.propTypes = {};

export default Status;
