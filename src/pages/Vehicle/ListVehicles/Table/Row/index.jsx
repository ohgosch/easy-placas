import React, { useContext } from 'react';

import { TEXTS } from 'logic/texts';
import { VehicleProp } from 'logic/propTypes/VehicleProp';
import { ModalContext } from 'contexts/ModalContext';

import { DeleteDialog } from '../DeleteDialog';
import { Container, Title, Delete } from './styles';

export function Row({ id, plate }) {
  const { openModal } = useContext(ModalContext);

  function deleteHandler() {
    openModal(() => <DeleteDialog id={id} plate={plate} />);
  }

  return (
    <Container>
      <Title>{plate}</Title>
      <Delete onClick={deleteHandler}>
        {TEXTS.vehicles.ListVehicles.deleteVehicle(plate)}
      </Delete>
    </Container>
  );
}

Row.propTypes = VehicleProp;

export default Row;
