import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sortAlphabetically } from '../../util';

import styles from './Filter.scss';
import FilterOption from './FilterOption';

class Filter extends Component {
  static propTypes = {
    category: PropTypes.string,
    children: PropTypes.node,
    onFilter: PropTypes.func,
    options: PropTypes.object
  };

  static defaultProps = {
    category: undefined,
    children: undefined,
    onFilter: undefined,
    options: undefined
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpenOptions: false,
      selectedOptions: []
    }
  }

  handleOnBlur = () => {
    this.setState({ isOpenOptions: false });
  }

  handleOnClear = () => {
    const { category, onFilter } = this.props;

    onFilter(category, []); 
    
    this.setState({ selectedOptions: [] });
  }

  handleOnOpenOptions = () => {
    this.setState(prevState => ({
      isOpenOptions: !prevState.isOpenOptions
    }));
  }
  
  onFilter = option => {
    const { category, onFilter } = this.props;

    const { selectedOptions } = this.state;

    const index = selectedOptions.indexOf(option);

    if (index === -1) {
      selectedOptions.push(option);
    } else {
      selectedOptions.splice(index, 1);
    } 

    this.setState({
      //selectedOptions: sortAlphabetically(selectedOptions)
      selectedOptions
    });

    onFilter(category, this.state.selectedOptions);    
  }

  renderFilterOptions = () => {
    const { options } = this.props;

    return Object.entries(options).map(([name, count]) => {
      return (
        <FilterOption 
          key={`${name}${count}`}
          name={name}
          onClick={this.onFilter}
        >
          {`${name} (${count})`}
        </FilterOption>
      )
    })
  }

  render() {
    const { children } = this.props;

    const { isOpenOptions, selectedOptions } = this.state;

    return (
      <div className="filter" onBlur={this.handleOnBlur} tabIndex={0}>
        <div className="filter__name" onClick={this.handleOnOpenOptions}>
          <span>{children}</span>

          <span>
            <FontAwesomeIcon icon="caret-down" className="nonono" />
          </span>
        </div>

        {isOpenOptions && (
          <div className="filter__options">
            <div>
              <span>{`${selectedOptions.length} selected`}</span>

              <span onClick={this.handleOnClear}>Clear</span>
            </div>

            <ul>
              {this.renderFilterOptions()}
            </ul>
          </div>
        )}
      </div>
    )
  }
};

export default Filter;
