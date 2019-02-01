import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { sortAlphabetically } from '../../util';

import './Filter.css';
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
      options: []
    }
  }

  onFilter = (option) => {
    const { category, onFilter } = this.props;
    const { options } = this.state;
    const index = options.indexOf(option);

    if (index === -1) {
      options.push(option);
    } else {
      options.splice(index, 1);
    } 

    this.setState({
      //options: sortAlphabetically(options)
      options
    });

    onFilter(category, this.state.options);    
  }

  onHandleBlur = () => {
    this.setState({ isOpenOptions: false });
  }

  onHandleClear = () => {
    const { category, onFilter } = this.props;

    onFilter(category, []); 
    this.setState({ options: [] });
  }

  onHandleOpenOptions = () => {
    this.setState(prevState => ({
      isOpenOptions: !prevState.isOpenOptions
    }));
  }

  render() {
    const { children, options } = this.props;

    const { isOpenOptions } = this.state;

    return (
      <div className="filter" onBlur={this.onHandleBlur} tabIndex={0}>
        <div className="filter__name" onClick={this.onHandleOpenOptions}>
          <span>{children}</span>

          {/* <span>Caret Icon</span>  */}
        </div>

        {isOpenOptions && (
          <div className="filter__options">
            <div>
              <span>Amount selected</span>

              <button onClick={this.onHandleClear}>Clear</button>
            </div>

            <ul>
              {Object.entries(options).map(([name, count]) => {
                return (
                  <FilterOption 
                    key={`${name}${count}`}
                    name={name}
                    onClick={this.onFilter}
                  >
                    {`${name} (${count})`}
                  </FilterOption>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
};

export default Filter;
