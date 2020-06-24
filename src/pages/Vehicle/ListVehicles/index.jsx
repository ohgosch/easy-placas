import React from 'react';

import { Label } from 'visual/styles/Label';
import { TEXTS } from 'logic/texts';

import { Table } from './Table';
import { Container } from './styles';

export function ListVehicles() {
  return (
    <Container>
      <Label as="h3">{TEXTS.vehicles.ListVehicles.title}</Label>
      <Table />
    </Container>
  );
}

ListVehicles.propTypes = {};

export default ListVehicles;
