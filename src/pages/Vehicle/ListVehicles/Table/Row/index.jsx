import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { ModalContext } from 'contexts/ModalContext';
import { VehicleProp } from 'logic/propTypes/VehicleProp';

import { Container, Title, Delete } from './styles';
import { DeleteDialog } from '../DeleteDialog';

export function Row({ id, title }) {
  const { openModal } = useContext(ModalContext);

  function deleteHandler() {
    openModal(() => <DeleteDialog id={id} title={title} />);
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Delete onClick={deleteHandler}>
        {TEXTS.vehicles.ListVehicles.deleteVehicle(title)}
      </Delete>
    </Container>
  );
}

Row.propTypes = VehicleProp;

export default Row;
