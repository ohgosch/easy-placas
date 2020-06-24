import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';
import { TEXTS } from 'logic/texts';
import { rotate } from 'components/Loader/styles';

import loader from 'assets/img/loader.svg';

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

  ${p => p.isLoading && css`
    font-size: 0;

    &:after {
      content: '${TEXTS.loading}';
      font-size: 0;
      width: 20px;
      height: 20px;
      display: block;
      margin: 0 auto;
      animation: ${rotate} 2s linear infinite;
      background-color: ${COLORS.greyLight};
      -webkit-mask: url(${loader}) no-repeat center;
      mask: url(${loader}) no-repeat center;
      mask-size: ${pxToRem(20)};
    }
  `}
`;

Button.propTypes = {
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
};
