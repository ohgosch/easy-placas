import React from 'react';
import { useLocation } from 'react-router-dom';

import { TEXTS } from 'logic/texts';

import logoSvg from 'assets/img/logo-white.svg';
import { ROUTES } from 'logic/constants';
import { Container, Title, Logo, Content, Hiperlink } from './styles';

export function Header() {
  const { pathname } = useLocation();
  const isAuth = pathname === ROUTES.auth;

  return !isAuth ? (
    <Container>
      <Content>
        <Title>{TEXTS.title}</Title>
        <Hiperlink to={ROUTES.main}>
          <Logo src={logoSvg} alt={TEXTS.logoAlt} />
        </Hiperlink>
      </Content>
    </Container>
  ) : (
    <></>
  );
}

export default Header;
