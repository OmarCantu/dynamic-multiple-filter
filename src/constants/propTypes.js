import PropTypes from 'prop-types';

export const COMPANY = PropTypes.shape({
  company_id: PropTypes.number.isRequired,
  company_name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  company_size: PropTypes.string.isRequired,
  use_case: PropTypes.array.isRequired,
  word_count: PropTypes.number.isRequired
});

COMPANY.default = {}

      
