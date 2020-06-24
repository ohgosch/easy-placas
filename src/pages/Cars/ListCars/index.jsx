import React from 'react';

import { Label } from 'visual/styles/Label';
import { TEXTS } from 'logic/texts';

import { Table } from './Table';
import { Container } from './styles';

const list = [
  { id: '1', title: 'AKH9192' },
  { id: '2', title: 'AKH9192' },
];

export function ListCars() {
  return (
    <Container>
      <Label as="h3">{TEXTS.cars.listCars.title}</Label>
      <Table list={list} />
    </Container>
  );
}

ListCars.propTypes = {};

export default ListCars;
