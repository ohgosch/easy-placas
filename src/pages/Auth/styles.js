import styled from 'styled-components';

import { Wrapper } from 'visual/styles/Wrapper';

export const Container = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
`;

export const Content = styled(Wrapper)`
  display: grid;
  grid-row-gap: 80px;
`;

export const Logo = styled.img`
  margin: 0 auto;
`;

export const Title = styled.h2`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;

export const Form = styled.form`
  display: grid;
  grid-row-gap: 40px;
`;

export const Inputs = styled.div`
  display: grid;
  grid-row-gap: 20px;
`;
