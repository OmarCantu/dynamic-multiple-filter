import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Filter.scss';
import FilterOption from './FilterOption';

class Filter extends Component {
  static propTypes = {
    category: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onFilter: PropTypes.func,
    options: PropTypes.object
  };

  static defaultProps = {
    category: undefined,
    children: undefined,
    className: undefined,
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
      selectedOptions
    });

    onFilter(category, this.state.selectedOptions);    
  }

  renderFilterOptions = () => {
    const { options } = this.props;

    const { selectedOptions } = this.state;

    return Object.entries(options).map(([name, count]) => {
      return (
        <FilterOption
          className={styles.option}
          key={`${name}${count}`}
          name={name}
          onClick={this.onFilter}
          selected={selectedOptions.includes(name)}
        >
          {`${name} (${count})`}
        </FilterOption>
      )
    })
  }

  render() {
    const { children, className } = this.props;

    const { isOpenOptions, selectedOptions } = this.state;

    const cn = classNames(styles.filter, className);

    const icon = isOpenOptions ? 'caret-up' : 'caret-down';

    return (
      <div className={cn} onBlur={this.handleOnBlur} tabIndex={0}>
        <div className={styles['filter-container']}>
          <div 
            className={styles.select} 
            onClick={this.handleOnOpenOptions}
          >
            <span className={styles.name}>{children}</span>

            <span>
              <FontAwesomeIcon icon={icon} />
            </span>
          </div>

          {isOpenOptions && (
            <div className={styles.options}>
              <div className={styles['options-details']}>
                <span>{`${selectedOptions.length} selected`}</span>

                <span 
                  className={styles.clear}
                  onClick={this.handleOnClear}
                >
                  Clear
                </span>
              </div>
  
              <ul className={styles['options-list']}>
                {this.renderFilterOptions()}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
};

export default Filter;
