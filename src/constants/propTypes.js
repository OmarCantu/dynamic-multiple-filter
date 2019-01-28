import PropTypes from 'prop-types';

export const FILTER = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  options: PropTypes.object
});

FILTER.default = {}
