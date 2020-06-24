import React from 'react';

import { Warning } from 'visual/styles/Warning';
import { TEXTS } from 'logic/texts';
import { Button } from 'visual/styles/Button';

export function Status() {
  return (
    <>
      <Warning>{TEXTS.cars.listCars.errors.timeout.message}</Warning>
      <Button>{TEXTS.cars.listCars.errors.timeout.refresh}</Button>
    </>
  );
}

export default Status;
