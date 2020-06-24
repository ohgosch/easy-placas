import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Label } from 'visual/styles/Label';
import { TEXTS } from 'logic/texts';
import { Input } from 'visual/styles/Input';
import { Warning } from 'visual/styles/Warning';
import { Button } from 'visual/styles/Button';

import { validatePlate } from 'logic/validation';
import { VehiclesContext } from 'contexts/VehiclesContext';
import { Container, Form, FormItem } from './styles';

export function CreateVehicle() {
  const { submitCreateVehicle, errorPlateSubmit } = useContext(VehiclesContext);
  const { register, handleSubmit, reset } = useForm();
  const [errorValidation, setErrorValidation] = useState(false);

  function formHandler({ plate }) {
    setErrorValidation(false);
    const hasError = validatePlate(plate);

    if (hasError) return setErrorValidation(true);

    return submitCreateVehicle(plate, reset);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(formHandler)}>
        <FormItem>
          <Label htmlFor="add-vehicle-input">
            {TEXTS.vehicles.addVehicle.addVehicleForm.label}
          </Label>
          <Input
            placeholder={TEXTS.vehicles.addVehicle.addVehicleForm.placeholder}
            id="add-vehicle-input"
            name="plate"
            ref={register}
            required
            dark
          />
        </FormItem>
        {errorValidation && (
          <Warning>{TEXTS.vehicles.addVehicle.errors.plateWrong}</Warning>
        )}
        {errorPlateSubmit && (
          <Warning>{TEXTS.vehicles.addVehicle.errors.createPlateAPI}</Warning>
        )}
        <Button type="submit">{TEXTS.vehicles.addVehicle.submit}</Button>
      </Form>
    </Container>
  );
}

export default CreateVehicle;
