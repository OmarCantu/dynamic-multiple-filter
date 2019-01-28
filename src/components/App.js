import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as companiesActs from '../state/modules/companies/actions';
import * as companiesSelectors from '../state/modules/companies/selectors';
import { filterCompanies, getFilterOptions } from '../util';
import Filter from './filter/Filter';

import './App.css';

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
      filteredCompanies: []
    }
  }

  componentDidMount() {
    const { companiesActions } = this.props;
    companiesActions.fetchCompanies();

    this.setState({ filteredCompanies: this.props.companies });
  }

  filterCompanies = (companies, filters) => {
    return filterCompanies(companies, filters);
  }

  getFilterOptions = (companies, category) => {
    return getFilterOptions(companies, category);
  }

  onHandleClickOption = () => {

  }

  render() {
    const { companies } = this.props;

    let filters = [
      {
        id: 1,
        category: 'industry',
        name: 'Industries',
        options: this.getFilterOptions(companies, 'industry')
      },
      {
        id: 2,
        category: 'location',
        name: 'Location',
        options: this.getFilterOptions(companies, 'location')
      },
      {
        id: 3,
        category: 'company_size',
        name: 'Company Size',
        options: this.getFilterOptions(companies, 'company_size')
      },
      {
        id: 4,
        category: 'use_case',
        name: 'Use Case',
        options: this.getFilterOptions(companies, 'use_case')
      }
    ];

    return (
      <div className="app">
        {/* <Head></Head> */}

        <main>
          {/* <Container> */}
            <div>
              <h1>You're in good company</h1>

              <div>
                <div>Filter by</div>

                {filters.map(filter => {
                  const { category, id, name, options } = filter;

                  return (
                    <Filter 
                      category={category}
                      key={id}
                      onClickOption={this.onHandleClickOption}
                      options={options} 
                    >
                      {name}
                    </Filter>
                  )
                })}
              </div>
            </div>

            {/* <Results>
              <Card />

              <Card />
            </Results> */}
          {/* </Container> */}
        </main>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  companies: companiesSelectors.companies(state)
});

const mapDispatchToProps = dispatch => ({
  companiesActions: bindActionCreators(companiesActs, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
