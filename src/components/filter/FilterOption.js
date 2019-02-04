import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FilterOption.scss';

class FilterOption extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    children: undefined,
    className: undefined,
    name: undefined,
    onClick: undefined
  };

  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    }
  }

  onClick = () => {
    const { name, onClick } = this.props;

    this.setState(prevState => ({
      isSelected: !prevState.isSelected
    }));

    onClick(name);
  }

  render() {
    const { children, className } = this.props;

    const { isSelected } = this.state;

    const optionClassName = classNames(styles.option, className, {
      [styles.selected]: isSelected
    });

    const textClassName = classNames({
      [styles['selected-text']]: isSelected
    });

    return (
      <li className={optionClassName} onClick={this.onClick}>
        <div className={styles['option-container']}>
          {isSelected && (
            <span className={styles.icon}>
              <FontAwesomeIcon className={styles['check-mark']} icon="check" />
            </span>
          )}

          <span className={textClassName}>{children}</span>
        </div>
      </li>
    )
  }
};

export default FilterOption;
