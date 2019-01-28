import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { sortAlphabetically } from '../../util';

import './Filter.css';
import FilterOption from './FilterOption';

class Filter extends Component {
  static propTypes = {
    category: PropTypes.string,
    children: PropTypes.node,
    onClickOption: PropTypes.func,
    options: PropTypes.object
  };

  static defaultProps = {
    category: undefined,
    children: undefined,
    onClickOption: undefined,
    options: undefined
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpenOptions: false,
      options: []
    }
  }

  onClickOption = (option, isSelected) => {
    const { category, onClickOption } = this.props;
    const { options } = this.state;
    const index = options.indexOf(option);

    if (index === -1 && isSelected) {
      options.push(option);
    } else if (index !== -1 && !isSelected) {
      options.splice(index, 1);
    } 

    this.setState({
      options: sortAlphabetically(options)
    });

    onClickOption(category, this.state.options);
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
      <div className="filter">
        <div className="filter__name" onClick={this.onHandleOpenOptions}>
          <span>{children}</span>

          {/* <span>Caret Icon</span>  */}
        </div>

        {isOpenOptions && (
          <div className="filter__options">
            <div>
              <span>Amount selected</span>

              <button>Clear</button>
            </div>

            <ul>
              {Object.entries(options).map(([name, count]) => {
                return (
                  <FilterOption 
                    key={`${name}${count}`}
                    name={name}
                    onClick={this.onClickOption}
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
