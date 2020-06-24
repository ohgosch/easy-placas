import React from 'react';

import { Label } from 'visual/styles/Label';
import { TEXTS } from 'logic/texts';
import { Input } from 'visual/styles/Input';
import { Warning } from 'visual/styles/Warning';
import { Button } from 'visual/styles/Button';

import { Container, Form, FormItem } from './styles';

export function CreateVehicle() {
  return (
    <Container>
      <Form>
        <FormItem>
          <Label htmlFor="add-vehicle-input">
            {TEXTS.vehicles.addVehicle.addVehicleForm.label}
          </Label>
          <Input
            placeholder={TEXTS.vehicles.addVehicle.addVehicleForm.placeholder}
            id="add-vehicle-input"
            dark
          />
        </FormItem>
        <Warning>{TEXTS.vehicles.addVehicle.errors.plateWrong}</Warning>
        <Button type="submit">{TEXTS.vehicles.addVehicle.submit}</Button>
      </Form>
    </Container>
  );
}

export default CreateVehicle;
