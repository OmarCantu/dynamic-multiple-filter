import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './FilterOption.css';

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
        {/* <span>Check mark icon</span> */}

        <span>{children}</span>
      </li>
    )
  }
};

export default FilterOption;
