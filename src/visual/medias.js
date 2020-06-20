import { css } from 'styled-components';

import { RESOLUTIONS } from 'visual/constants';

export const mobile = content => css`
  @media (max-width: ${RESOLUTIONS.mobile.max}) {
    ${content}
  }
`;

export const mobileTablet = content => css`
  @media (max-width: ${RESOLUTIONS.tablet.max}) {
    ${content}
  }
`;

export const tablet = content => css`
  @media (min-width: ${RESOLUTIONS.tablet.min}) and (max-width: ${RESOLUTIONS
      .tablet.max}) {
    ${content}
  }
`;

export const tabletDesktop = content => css`
  @media (min-width: ${RESOLUTIONS.tablet.min}) {
    ${content}
  }
`;

export const desktop = content => css`
  @media (min-width: ${RESOLUTIONS.desktop.min}) {
    ${content}
  }
`;
