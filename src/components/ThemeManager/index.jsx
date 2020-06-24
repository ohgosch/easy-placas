import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

export function ThemeManager({ children }) {
  const [isBlue, setIsBlue] = useState(false);

  const setBlue = useCallback(() => {
    setIsBlue(true);
  }, []);

  const setNotBlue = useCallback(() => {
    setIsBlue(false);
  }, []);

  const theme = {
    setBlue,
    setNotBlue,
    isBlue,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ThemeManager.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeManager;
