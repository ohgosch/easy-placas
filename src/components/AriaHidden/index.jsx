import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function AriaHidden({ children, active }) {
  return <Container aria-hidden={active}>{children}</Container>;
}

AriaHidden.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
};

export default AriaHidden;
