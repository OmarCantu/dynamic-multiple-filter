import { handleActions } from 'redux-actions';

import companiesActionTypes from '../actionTypes';
import initialState from '../../../initialState';

export const companiesReducer = handleActions(
  {
    [companiesActionTypes.FETCH_COMPANIES_SUCCESS]: (
      state,
      action
      ) => ({
        ...state,
        ...action.payload.companies
      })
  },
  initialState.companies
);
