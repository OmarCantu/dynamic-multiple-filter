import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { 
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faCaretDown,
  faCaretUp,
  faCheck,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import Card from './card/Card';
import Container from './container/Container';
import Filter from './filter/Filter';
import Navigation from './navigation/Navigation';
import Pagination from './pagination/Pagination';
import { FILTER_DATA } from '../constants/general';
import { filterCompanies, getFilterOptions } from '../util';

import styles from './App.scss';

library.add(
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faCaretDown,
  faCaretUp,
  faCheck,
  faClock
);

class App extends Component {
  static propTypes = {
    companies: PropTypes.array,
    companiesActions: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object
    ])
  };

  static defaultProps = {
    companies: [],
    companiesActions: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      filteredCompanies: [],
      filters: {},
      resultsPerPage: 9
    }
  }

  componentDidMount() {
    const { companiesActions } = this.props;
    companiesActions.fetchCompanies();
  }

  componentDidUpdate(prevProps) {
    const { companies } = this.props;

    if (prevProps.companies !== companies) {
      this.setState({ filteredCompanies: companies });
    }
  }

  filterCompanies = () => {   
    const { companies } = this.props;

    const { filters } = this.state;

    const filteredCompanies = filterCompanies(companies, filters);

    this.setState({ filteredCompanies });
  }

  getFilterOptions = (category) => {
    const { companies } = this.props;

    return getFilterOptions(companies, category);
  }

  handleOnFilter = (category, options) => {
    const { filters } = this.state;
    filters[category] = options;

    this.setState({ filters });
    this.filterCompanies(); 
  }

  handleOnBack = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage - 1
    }));
  }

  handleOnNext = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }));
  }

  handleOnPageClick = event => {    
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  renderFilters = () => {
    return FILTER_DATA.map((filter, key) => {
      const { category, name } = filter;

      return (
        <Filter
          category={category}
          className={styles.filter}
          key={`${category}${key}`}
          onFilter={this.handleOnFilter}
          options={this.getFilterOptions(category)}
        >
          {name}
        </Filter>
      )
    })
  }

  renderResults = () => {
    const { currentPage, filteredCompanies, resultsPerPage } = this.state;

    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    
    const results = filteredCompanies
                      .slice(indexOfFirstResult, indexOfLastResult);

    return results.map(company => {
      const { company_id: key } = company;

      return (
        <Card company={company} key={key} />
      )  
    })
  }

  render() {
    const { currentPage, filteredCompanies, resultsPerPage } = this.state;

    return (
      <div>
        <Navigation />

        <header className={styles.header}>
          <Container className={styles['filters-wrapper']}>
            <h1 className={styles.heading}>You're in good company</h1>

            <div className={styles.filters}>
              <div className={styles['filter-by']}>Filter by</div>

              {this.renderFilters()}
            </div>
          </Container>
        </header>

        <main className={styles.main}>
          <Container className={styles['results-wrapper']}>
            <div className={styles.results}>
              {this.renderResults()}
            </div>

            <Pagination 
              currentPage={currentPage}
              numberOfResults={filteredCompanies.length}
              onBack={this.handleOnBack}
              onNext={this.handleOnNext}
              onPageClick={this.handleOnPageClick}
              resultsPerPage={resultsPerPage}
            />
          </Container>
        </main>
      </div>
    );
  }
};

export default App;
