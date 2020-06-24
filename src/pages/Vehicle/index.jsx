import React from 'react';

import { CreateVehicle } from 'components/CreateVehicle';
import { ListVehicles } from 'pages/Vehicle/ListVehicles';
import { VehiclesProvider } from 'contexts/VehiclesContext';

import { Container, Content } from './styles';

export function Vehicle() {
  return (
    <Container>
      <Content>
        <VehiclesProvider>
          <CreateVehicle />
          <ListVehicles />
        </VehiclesProvider>
      </Content>
    </Container>
  );
}

export default Vehicle;
