import React, { useState, useEffect, useCallback } from 'react';

import { Loader } from 'components/Loader';
import { getVehicles } from 'logic/requests/vehicle';

import { Row } from './Row';
import { Status } from './Status';
import { Container } from './styles';

export function Table() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const empty = !vehicles.length && !error && !loading;

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await getVehicles();
      setVehicles(data);
    } catch (errors) {
      setError(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Container>
      <Status error={error} empty={empty} update={fetch} />
      {vehicles.map(({ id, title }) => (
        <Row key={id} id={id} title={title} />
      ))}
      {loading && <Loader />}
    </Container>
  );
}

export default Table;
