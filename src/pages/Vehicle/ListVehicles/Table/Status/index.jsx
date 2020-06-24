import React from 'react';
import PropTypes from 'prop-types';

import { Warning } from 'visual/styles/Warning';
import { TEXTS } from 'logic/texts';
import { Button } from 'visual/styles/Button';

export function Status({ error, empty, update }) {
  return (
    <>
      {empty && (
        <>
          <Warning>{TEXTS.vehicles.ListVehicles.errors.empty.message}</Warning>
        </>
      )}
      {error && (
        <>
          <Warning>
            {TEXTS.vehicles.ListVehicles.errors.timeout.message}
          </Warning>
          <Button onClick={update}>
            {TEXTS.vehicles.ListVehicles.errors.timeout.refresh}
          </Button>
        </>
      )}
    </>
  );
}

Status.propTypes = {
  error: PropTypes.bool.isRequired,
  empty: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
};

export default Status;
