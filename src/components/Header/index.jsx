import React from 'react';

import { TEXTS } from 'logic/texts';
import { Container, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Title>{TEXTS.title}</Title>
    </Container>
  );
}

export default Header;
