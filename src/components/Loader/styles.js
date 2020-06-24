import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { pxToRem } from 'logic/pxToRem';

import loader from 'assets/img/loader.svg';
import { COLORS } from 'visual/constants';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 30px;
  height: 30px;
  font-size: 0;
  display: block;
  margin: 0 auto;
  animation: ${rotate} 2s linear infinite;
  background-color: ${p => p.fill};
  -webkit-mask: url(${loader}) no-repeat center;
  mask: url(${loader}) no-repeat center;
  mask-size: ${pxToRem(30)};
`;

Container.propTypes = {
  fill: PropTypes.string,
};

Container.defaultProps = {
  fill: COLORS.dark,
};
