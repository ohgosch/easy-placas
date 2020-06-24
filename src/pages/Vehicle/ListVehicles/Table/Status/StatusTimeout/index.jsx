import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { Button } from 'visual/styles/Button';
import { Warning } from 'visual/styles/Warning';
import { VehiclesContext } from 'contexts/VehiclesContext';

export function StatusTimeout() {
  const { update } = useContext(VehiclesContext);

  return (
    <>
      <Warning>{TEXTS.vehicles.ListVehicles.errors.timeout.message}</Warning>
      <Button onClick={update}>
        {TEXTS.vehicles.ListVehicles.errors.timeout.refresh}
      </Button>
    </>
  );
}

export default StatusTimeout;
