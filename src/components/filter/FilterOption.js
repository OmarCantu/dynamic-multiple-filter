import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FilterOption.scss';

class FilterOption extends Component {
  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    children: undefined,
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
    const { children } = this.props;

    const { isSelected } = this.state;

    return (
      <li className={`active-${isSelected}`} onClick={this.onClick}>
        <span>
          <FontAwesomeIcon icon="check" className="nonono" />
        </span>

        <span>{children}</span>
      </li>
    )
  }
};

export default FilterOption;
