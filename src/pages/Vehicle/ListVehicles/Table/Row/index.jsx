import React from 'react';

import { VehicleProp } from 'logic/propTypes/VehicleProp';
import { TEXTS } from 'logic/texts';

import { Container, Title, Delete } from './styles';

export function Row({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Delete>{TEXTS.vehicles.ListVehicles.deleteVehicle(title)}</Delete>
    </Container>
  );
}

Row.propTypes = VehicleProp;

export default Row;
