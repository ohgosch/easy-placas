import styled from 'styled-components';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Label = styled.label`
  font-style: normal;
  display: block;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(21)};
  color: ${COLORS.dark};
  padding-bottom: ${pxToRem(10)};
`;
