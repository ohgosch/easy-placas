import React from 'react';

import { CreateCar } from 'components/CreateCar';
import { ListCars } from 'pages/Cars/ListCars';

import { Container, Content } from './styles';

export function Cars() {
  return (
    <Container>
      <Content>
        <CreateCar />
        <ListCars />
      </Content>
    </Container>
  );
}

export default Cars;
