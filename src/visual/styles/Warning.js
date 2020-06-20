import styled from 'styled-components';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Warning = styled.p`
  width: 100%;
  padding: 20px 30px;
  color: ${COLORS.orange};
  font-style: normal;
  font-weight: normal;
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(21)};
  text-align: center;
  border: 3px solid;
`;
