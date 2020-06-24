import styled, { css, keyframes } from 'styled-components';

import { tabletDesktop, mobile } from 'visual/medias';
import { COLORS } from 'visual/constants';
import { pxToRem } from 'logic/pxToRem';

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

export const Container = styled.div`
  background-color: ${COLORS.darkAlpha(.9)};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  animation: ${fadeIn} 0.2s ease-in;
  opacity: 1;
`;

export const CloseOverlay = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: transparent;
  border: none;
  width: 100%;
`;

export const Content = styled.section`
  background-color: ${COLORS.white};
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: ${pxToRem(50)};
  padding: 50px;
  width: 100%;
  ${tabletDesktop(css`
    border-radius: 8px;
    max-height: 90vh;
    max-width: ${pxToRem(450)};
  `)}
  ${mobile(css`
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
  `)}
`;
