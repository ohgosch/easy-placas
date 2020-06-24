import React from 'react';

import { TEXTS } from 'logic/texts';
import { Warning } from 'visual/styles/Warning';

export function StatusEmpty() {
  return <Warning>{TEXTS.vehicles.ListVehicles.errors.empty.message}</Warning>;
}

export default StatusEmpty;
