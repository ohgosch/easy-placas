import React from 'react';

import { CarProp } from 'logic/propTypes/CarProp';
import { TEXTS } from 'logic/texts';

import { Container, Title, Delete } from './styles';

export function Row({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Delete>{TEXTS.cars.listCars.deleteCar(title)}</Delete>
    </Container>
  );
}

Row.propTypes = CarProp;

export default Row;
