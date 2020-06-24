import React from 'react';

import { CreateVehicle } from 'components/CreateVehicle';
import { ListVehicles } from 'pages/Vehicle/ListVehicles';

import { TEXTS } from 'logic/texts';
import { Container, Content, Title } from './styles';

export function Vehicle() {
  return (
    <Container>
      <Title>{TEXTS.vehicles.title}</Title>
      <Content>
        <CreateVehicle />
        <ListVehicles />
      </Content>
    </Container>
  );
}

export default Vehicle;
