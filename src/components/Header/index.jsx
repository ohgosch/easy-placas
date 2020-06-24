import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { TEXTS } from 'logic/texts';

import logoSvg from 'assets/img/logo-white.svg';
import { ROUTES } from 'logic/constants';
import { AuthContext } from 'contexts/AuthContext';
import {
  Container,
  Title,
  Logo,
  Content,
  Hiperlink,
  LogoutButton,
} from './styles';

export function Header() {
  const { pathname } = useLocation();
  const { logout } = useContext(AuthContext);
  const isAuth = pathname === ROUTES.auth;

  return !isAuth ? (
    <Container>
      <Content>
        <Title>{TEXTS.title}</Title>
        <Hiperlink to={ROUTES.main}>
          <Logo src={logoSvg} alt={TEXTS.logoAlt} />
        </Hiperlink>
        <LogoutButton onClick={logout}>{TEXTS.header.logout}</LogoutButton>
      </Content>
    </Container>
  ) : (
    <></>
  );
}

export default Header;
