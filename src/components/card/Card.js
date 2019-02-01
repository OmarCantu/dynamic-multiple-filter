import React from 'react';

import { COMPANY } from '../../constants/propTypes';

import './Card.css';

const Card = props => {
  const { company } = props;

  const { company_name: name } = company;

  return (
    <div>{name}</div>
  )
}

Card.propTypes = {
  company: COMPANY
};

Card.defaultProps = {
  company: COMPANY.default
};

export default Card;