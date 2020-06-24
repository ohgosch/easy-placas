import PropTypes from 'prop-types';

export const VehicleProp = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string.isRequired,
};
