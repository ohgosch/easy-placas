import PropTypes from 'prop-types';

export const CarProp = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string.isRequired,
};
