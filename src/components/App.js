import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as companiesActs from '../state/modules/companies/actions';
import * as companiesSelectors from '../state/modules/companies/selectors';
import Card from './card/Card';
import Filter from './filter/Filter';
import { FILTER_DATA } from '../constants/general';
import { filterCompanies, getFilterOptions } from '../util';

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
      filteredCompanies: [],
      filters: {}
    }
  }

  componentDidMount() {
    const { companiesActions } = this.props;
    companiesActions.fetchCompanies();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.companies !== this.props.companies) {
      this.setState({ filteredCompanies: this.props.companies });
    }
  }

  filterCompanies = () => {   
    const filteredCompanies = filterCompanies(this.props.companies, this.state.filters);
    this.setState({ filteredCompanies });
  }

  getFilterOptions = (category) => {
    // return getFilterOptions(this.state.filteredCompanies, category);
    return getFilterOptions(this.props.companies, category);
  }

  onHandleFilter = (category, options) => {
    const { filters } = this.state;
    filters[category] = options;

    this.setState({ filters });
    this.filterCompanies(); 
  }

  render() {
    const { filteredCompanies } = this.state;
 
    return (
      <div className="app">
        {/* <Head></Head> */}

        <main>
          {/* <Container> */}
            <div>
              <h1>You're in good company</h1>

              <div>
                <div>Filter by</div>

                {FILTER_DATA.map((filter, key) => {
                  const { category, name } = filter;

                  return (
                    <Filter 
                      category={category}
                      key={`${category}${key}`}
                      onFilter={this.onHandleFilter}
                      options={this.getFilterOptions(category)} 
                    >
                      {name}
                    </Filter>
                  )
                })}
              </div>
            </div>

            <br />
            <br />
            <br />
            <div>
              {filteredCompanies.map(company => {
                const { company_id: key } = company;

                return (
                  <Card company={company} key={key} />
                )  
              })}
            </div>
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
