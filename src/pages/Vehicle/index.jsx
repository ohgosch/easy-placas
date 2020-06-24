import React from 'react';

import { CreateVehicle } from 'components/CreateVehicle';
import { ListVehicles } from 'pages/Vehicle/ListVehicles';

import { Container, Content } from './styles';

export function Vehicle() {
  return (
    <Container>
      <Content>
        <CreateVehicle />
        <ListVehicles />
      </Content>
    </Container>
  );
}

export default Vehicle;
