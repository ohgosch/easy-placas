import React from 'react';

import { TEXTS } from 'logic/texts';

import logoImg from 'assets/img/logo_white.svg';
import { Input } from 'visual/styles/Input';
import { Button } from 'visual/styles/Button';
import { Warning } from 'visual/styles/Warning';
import { Container, Logo, Title, Content, Form, Inputs } from './styles';

export function Auth() {
  return (
    <Container>
      <Content>
        <Title>{TEXTS.auth.title}</Title>
        <Logo src={logoImg} alt={TEXTS.logoAlt} />
        <Form>
          <Inputs>
            <Input
              placeholder={TEXTS.auth.email.placeholder}
              type="email"
              required
            />
            <Input
              placeholder={TEXTS.auth.password.placeholder}
              type="password"
              required
            />
          </Inputs>
          <Warning>{TEXTS.auth.errors.notAuthorized}</Warning>
          <Button>{TEXTS.auth.submit}</Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Auth;
