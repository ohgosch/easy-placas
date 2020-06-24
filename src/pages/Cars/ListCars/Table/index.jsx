import React from 'react';
import PropTypes from 'prop-types';

import { CarProp } from 'logic/propTypes/CarProp';
import { Loader } from 'components/Loader';

import { Row } from './Row';
import { Status } from './Status';
import { Container } from './styles';

export function Table({ list }) {
  return (
    <Container>
      <Status />
      {list.map(({ id, title }) => (
        <Row key={id} id={id} title={title} />
      ))}
      <Loader />
    </Container>
  );
}

Table.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(CarProp)).isRequired,
};

export default Table;
