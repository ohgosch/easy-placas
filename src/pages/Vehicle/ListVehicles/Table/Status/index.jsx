import React, { useContext } from 'react';

import { VehiclesContext } from 'contexts/VehiclesContext';

import { StatusTimeout } from './StatusTimeout';
import { StatusEmpty } from './StatusEmpty';

export function Status() {
  const { vehicles, errorList, loading } = useContext(VehiclesContext);
  const empty = !vehicles.length && !errorList && !loading;

  return (
    <>
      {empty && <StatusEmpty />}
      {errorList && <StatusTimeout />}
    </>
  );
}

Status.propTypes = {};

export default Status;
