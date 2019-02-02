import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './Pagination.css';

class Pagination extends Component {
  static propTypes = {
    currentPage: PropTypes.number,
    numberOfResults: PropTypes.number,
    resultsPerPage: PropTypes.number
  };

  static defaultProps = {
    currentPage: undefined,
    numberOfResults: undefined,
    resultsPerPage: undefined
  };

  getLastPage = (numberOfResults, resultsPerPage) => {
    return Math.ceil(numberOfResults / resultsPerPage);
  }

  renderBackButton = () => {
    const { currentPage, onPageClick } = this.props;

    if (currentPage === 1) {
      return null;
    }

    return (
      <li
        id={currentPage - 1}
        onClick={onPageClick}
      >
        Back
      </li>
    )
  }

  renderNextButton = () => {
    const { 
      currentPage,
      numberOfResults,
      onPageClick,
      resultsPerPage
    } = this.props;

    const lastPage = this.getLastPage(numberOfResults, resultsPerPage);

    if (currentPage === lastPage) {
      return null;
    }

    return (
      <li
        id={currentPage + 1}
        onClick={onPageClick}
      >
        Next
      </li>
    )
  }

  render() {
    const { numberOfResults, onPageClick, resultsPerPage } = this.props;

    if (numberOfResults <= resultsPerPage) {
      return null;
    }

    const pageNumbers = [];
    const lastPage = this.getLastPage(numberOfResults, resultsPerPage);

    for (let i = 1; i <= lastPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <ul>
        {this.renderBackButton()}

        {pageNumbers.map(number => {
          return (
            <li
              id={number}
              key={number}
              onClick={onPageClick}
            >
              {number}
            </li>
          );
        })}

        {this.renderNextButton()}
      </ul>
    )
  }
};

export default Pagination;
