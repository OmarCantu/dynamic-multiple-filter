import * as companiesActions from '../../modules/companies/actions';
import api from '../../../api';
import companiesActionTypes from '../../modules/companies/actionTypes';

export const companiesEpic = action$ =>
  action$.ofType(companiesActionTypes.FETCH_COMPANIES)
    .switchMap(() =>
      api.getCompanies()
        .map(response => companiesActions.fetchCompaniesSuccess(response))
        .catch(error =>
          companiesActions.fetchCompaniesFailure(error)
        )
        .takeUntil(
          action$.ofType(companiesActionTypes.FETCH_COMPANIES_CANCEL)
        )
        .startWith(companiesActions.fetchCompaniesRequest())
      );
