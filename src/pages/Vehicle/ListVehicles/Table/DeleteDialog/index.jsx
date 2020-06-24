import React, { useContext, useState } from 'react';

import { TEXTS } from 'logic/texts';
import { VehicleProp } from 'logic/propTypes/VehicleProp';
import { VehiclesContext } from 'contexts/VehiclesContext';
import { ModalContext } from 'contexts/ModalContext';
import { Button } from 'visual/styles/Button';

import { Container, Title, Buttons } from './styles';

export function DeleteDialog({ id, plate }) {
  const { submitDeleteVehicle } = useContext(VehiclesContext);
  const { closeModal } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);

  async function deleteHandler() {
    setLoading(true);
    await submitDeleteVehicle(id, closeModal);
  }

  return (
    <Container>
      <Title>{TEXTS.vehicles.ListVehicles.deleteDialog.title(plate)}</Title>
      <Buttons>
        <Button isLoading={loading} disabled={loading} onClick={deleteHandler}>
          {TEXTS.vehicles.ListVehicles.deleteDialog.confirm}
        </Button>
        <Button onClick={closeModal}>
          {TEXTS.vehicles.ListVehicles.deleteDialog.cancel}
        </Button>
      </Buttons>
    </Container>
  );
}

DeleteDialog.propTypes = VehicleProp;

export default DeleteDialog;
