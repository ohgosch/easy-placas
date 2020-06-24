import PropTypes from 'prop-types';

export const VehicleProp = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  plate: PropTypes.string.isRequired,
};
