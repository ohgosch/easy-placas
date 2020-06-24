import React from 'react';

import { TEXTS } from 'logic/texts';
import { Container } from './styles';

export function Loader() {
  return <Container>{TEXTS.loading}</Container>;
}

export default Loader;
