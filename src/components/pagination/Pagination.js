import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Pagination.scss';

class Pagination extends Component {
  static propTypes = {
    className: PropTypes.string,
    currentPage: PropTypes.number,
    numberOfResults: PropTypes.number,
    onBack: PropTypes.func,
    onNext: PropTypes.func,
    onPageClick: PropTypes.func,
    resultsPerPage: PropTypes.number
  };

  static defaultProps = {
    className: undefined,
    currentPage: undefined,
    numberOfResults: undefined,
    onBack: undefined,
    onNext: undefined,
    onPageClick: undefined,
    resultsPerPage: undefined
  };

  getLastPage = (numberOfResults, resultsPerPage) => {
    return Math.ceil(numberOfResults / resultsPerPage);
  }

  renderBackButton = () => {
    const { currentPage, onBack } = this.props;

    if (currentPage === 1) {
      return null;
    }

    return (
      <li className={styles.page} onClick={onBack}>
        <span>
          <FontAwesomeIcon icon="angle-left" />
        </span>
      </li>
    )
  }

  renderNextButton = () => {
    const { 
      currentPage,
      numberOfResults,
      onNext,
      resultsPerPage
    } = this.props;

    const lastPage = this.getLastPage(numberOfResults, resultsPerPage);

    if (currentPage === lastPage) {
      return null;
    }

    return (
      <li className={styles.page} onClick={onNext}>
        <span>
          <FontAwesomeIcon icon="angle-right" />
        </span>
      </li>
    )
  }

  render() {
    const {
      className,
      currentPage,
      numberOfResults,
      onPageClick,
      resultsPerPage
    } = this.props;

    if (numberOfResults <= resultsPerPage) {
      return null;
    }

    const pageNumbers = [];
    const lastPage = this.getLastPage(numberOfResults, resultsPerPage);

    for (let i = 1; i <= lastPage; i++) {
      pageNumbers.push(i);
    }

    const paginationClass = classNames(styles.pagination, className);

    return (
      <ul className={paginationClass}>
        {this.renderBackButton()}

        {pageNumbers.map(number => {
          const pageClass = classNames(styles.page, {
            [styles.current]: number === currentPage
          });

          return (
            <li
              className={pageClass}
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
