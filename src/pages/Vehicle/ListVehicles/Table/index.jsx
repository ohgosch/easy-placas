import React, { useContext } from 'react';

import { Loader } from 'components/Loader';
import { VehiclesContext } from 'contexts/VehiclesContext';

import { Row } from './Row';
import { Status } from './Status';
import { Container } from './styles';

export function Table() {
  const { vehicles, loading } = useContext(VehiclesContext);

  return (
    <Container>
      <Status />
      {vehicles.map(({ id, plate }) => (
        <Row key={id} id={id} title={plate} />
      ))}
      {loading && <Loader />}
    </Container>
  );
}

export default Table;
