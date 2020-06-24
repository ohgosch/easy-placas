import styled from 'styled-components';

import deleteIcon from 'assets/img/icon-trash.svg';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

export const Container = styled.article`
  background-color: ${COLORS.white};
  box-shadow: 0px 0px 8px rgba(80, 80, 80, 0.2);
  border-radius: 5px;
  padding: 13px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(18)};
  color: ${COLORS.dark};
`;

export const Delete = styled.button`
  font-size: 0;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  background-image: url(${deleteIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
