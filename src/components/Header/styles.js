import styled from 'styled-components';

import { Wrapper } from 'visual/styles/Wrapper';
import { COLORS } from 'visual/constants';
import { Link } from 'react-router-dom';

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
`;

export const Title = styled.h1`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;

export const Hiperlink = styled(Link)`

`;

export const Logo = styled.img`
  max-height: 100%;
`;
