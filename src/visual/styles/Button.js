import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Button = styled.button`
  background-color: ${COLORS.primaryDark};
  border: 1px solid ${COLORS.greyLight};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 30px;
  font-style: normal;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  color: ${COLORS.greyLight};
`;
