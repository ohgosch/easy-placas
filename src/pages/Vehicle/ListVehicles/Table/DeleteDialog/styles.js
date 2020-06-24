import styled from 'styled-components';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.div`
  display: grid;
  grid-row-gap: ${pxToRem(25)};
`;

export const Title = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(21)};
  text-align: center;
  color: ${COLORS.dark};
`;

export const Buttons = styled.div`
  display: grid;
  grid-row-gap: ${pxToRem(5)};
`;
