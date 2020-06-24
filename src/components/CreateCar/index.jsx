import React from 'react';

import { Label } from 'visual/styles/Label';
import { TEXTS } from 'logic/texts';
import { Input } from 'visual/styles/Input';
import { Warning } from 'visual/styles/Warning';
import { Button } from 'visual/styles/Button';

import { Container, Form, FormItem } from './styles';

export function CreateCar() {
  return (
    <Container>
      <Form>
        <FormItem>
          <Label htmlFor="add-car-input">
            {TEXTS.cars.addCar.addCarForm.label}
          </Label>
          <Input
            placeholder={TEXTS.cars.addCar.addCarForm.placeholder}
            id="add-car-input"
            dark
          />
        </FormItem>
        <Warning>{TEXTS.cars.addCar.errors.plateWrong}</Warning>
        <Button type="submit">{TEXTS.cars.addCar.submit}</Button>
      </Form>
    </Container>
  );
}

export default CreateCar;
