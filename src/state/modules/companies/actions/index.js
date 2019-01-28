import { createAction } from 'redux-actions';

import companiesActionTypes from '../actionTypes';

export const fetchCompanies = createAction(
  companiesActionTypes.FETCH_COMPANIES
);

export const fetchCompaniesCancel = createAction(
  companiesActionTypes.FETCH_COMPANIES_CANCEL
);

export const fetchCompaniesFailure = createAction(
  companiesActionTypes.FETCH_COMPANIES_FAILURE
);

export const fetchCompaniesRequest = createAction(
  companiesActionTypes.FETCH_COMPANIES_REQUEST
);

export const fetchCompaniesSuccess = createAction(
  companiesActionTypes.FETCH_COMPANIES_SUCCESS,
  response => ({ companies: response })
);