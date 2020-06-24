import React, { useContext, useEffect } from 'react';

import { Loader } from 'components/Loader';
import { VehiclesContext } from 'contexts/VehiclesContext';

import { Row } from './Row';
import { Status } from './Status';
import { Container } from './styles';

export function Table() {
  const { vehicles, loading, update } = useContext(VehiclesContext);

  useEffect(() => {
    update();
  }, [update]);

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
