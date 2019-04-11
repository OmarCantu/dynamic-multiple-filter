import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { COMPANY } from '../../constants/propTypes';
import { getReadDuration } from '../../util';

import styles from './Card.scss';

const Card = props => {
  const { className, company } = props;

  const { 
    company_name: name,
    excerpt: description,
    image_url: src,
    word_count: wordCount
  } = company;

  const cn = classNames(styles.card, className);

  return (
    <div className={cn}>
      <img alt={name} className={styles.img} src={src} />

      <p className={styles.description}>{description}</p>

      <div className={styles['read-more-wrapper']}>
        <span className={styles['read-more']}>Read more</span>
        
        <span>
          <FontAwesomeIcon className={styles.arrow} icon="arrow-right" />
        </span>
      </div>

      <div className={styles['duration']}>
        <span>
          <FontAwesomeIcon 
            className={styles.clock}
            icon="clock"
          />
        </span>

        <span className={styles.minutes}>
          {`${getReadDuration(wordCount)} min read`}
        </span>
      </div>
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  company: COMPANY
};

Card.defaultProps = {
  className: undefined,
  company: COMPANY.default
};

export default Card;