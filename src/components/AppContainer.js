import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as companiesActs from '../state/modules/companies/actions';
import * as companiesSelectors from '../state/modules/companies/selectors';
import App from './App';

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

