import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Wrapper } from 'visual/styles/Wrapper';
import { COLORS } from 'visual/constants';

import logoutSVG from 'assets/img/icon-logout.svg';

export const Container = styled.header`
  background-color: ${COLORS.primaryDark};
  box-shadow: 0px 4px 4px rgba(80, 80, 80, 0.4);
  margin-bottom: 55px;
`;

export const Content = styled(Wrapper)`
  height: 75px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;

export const Hiperlink = styled(Link)`
  height: 100%;
`;

export const Logo = styled.img`
  max-height: 100%;
`;

export const LogoutButton = styled.button`
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 0;
  border: none;
  background-color: ${COLORS.white};
  -webkit-mask-image: url(${logoutSVG});
  mask-image: url(${logoutSVG});
`;
