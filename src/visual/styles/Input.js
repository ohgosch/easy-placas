import styled, { css } from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Input = styled.input`
  border: 3px solid;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 30px;
  font-weight: 500;
  font-size: ${pxToRem(18)};
  background-color: transparent;
  width: 100%;
  
  &, &::placeholder {
    color: ${COLORS.greyLight};
  }

  ${p => p.dark && css`
    &, &::placeholder {
      color: ${COLORS.dark};
    }
  `}
`;
