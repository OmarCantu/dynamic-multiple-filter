import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { COMPANY } from '../../constants/propTypes';
import { getReadDuration } from '../../util';

import styles from './Card.scss';

const Card = props => {
  const { company } = props;

  const { 
    company_name: name,
    excerpt: description,
    image_url: src,
    word_count: wordCount
  } = company;

  return (
    <div>
      <img alt={name} src={src} />

      <p>{description}</p>

      <div>
        <span>Read more</span>
        
        <span>
          <FontAwesomeIcon icon="arrow-right" className="nonono" />
        </span>
      </div>

      <div>
        <span>
          <FontAwesomeIcon icon="clock" className="nonono" mask={['fas', 'clock']} />
        </span>

        <span>{`${getReadDuration(wordCount)} min read`}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  company: COMPANY
};

Card.defaultProps = {
  company: COMPANY.default
};

export default Card;