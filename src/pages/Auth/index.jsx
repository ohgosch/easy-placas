import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { TEXTS } from 'logic/texts';
import { Input } from 'visual/styles/Input';
import { Button } from 'visual/styles/Button';
import { Warning } from 'visual/styles/Warning';
import { AuthContext } from 'contexts/AuthContext';

import logoImg from 'assets/img/logo-white.svg';
import {
  Container,
  Logo,
  Title,
  Content,
  Form,
  Inputs,
  GlobalBackground,
} from './styles';

export function Auth() {
  const { error, authenticate, loading } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  function formHandler(form) {
    authenticate(form);
  }

  return (
    <Container>
      <GlobalBackground />
      <Content>
        <Title>{TEXTS.auth.title}</Title>
        <Logo src={logoImg} alt={TEXTS.logoAlt} />
        <Form onSubmit={handleSubmit(formHandler)}>
          <Inputs>
            <Input
              placeholder={TEXTS.auth.email.placeholder}
              type="email"
              name="email"
              defaultValue="frontend-dev@easyvehicleros.com"
              ref={register}
              disabled={loading}
              required
            />
            <Input
              placeholder={TEXTS.auth.password.placeholder}
              type="password"
              name="password"
              defaultValue="Fr0nt3ndR0ck5!"
              disabled={loading}
              ref={register}
              required
            />
          </Inputs>
          {error && <Warning>{TEXTS.auth.errors.notAuthorized}</Warning>}
          <Button isLoading={loading} disabled={loading}>
            {TEXTS.auth.submit}
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Auth;
