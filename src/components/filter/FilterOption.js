import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FilterOption.scss';

const FilterOption = props => {
  const { children, className, name, onClick, selected } = props;

  const optionClassName = classNames(styles.option, className, {
    [styles.selected]: selected
  });

  const textClassName = classNames({
    [styles['selected-text']]: selected
  });

  return (
    <li className={optionClassName} onClick={() => onClick(name)}>
      <div className={styles['option-container']}>
        {selected && (
          <span className={styles.icon}>
            <FontAwesomeIcon className={styles['check-mark']} icon="check" />
          </span>
        )}

        <span className={textClassName}>{children}</span>
      </div>
    </li>
  )
};

FilterOption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

FilterOption.defaultProps = {
  children: undefined,
  className: undefined,
  name: undefined,
  onClick: undefined,
  selected: false
};

export default FilterOption;
