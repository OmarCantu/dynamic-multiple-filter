import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { companiesEpic } from './state/epics/companies';
import { companiesReducer } from './state/modules/companies/reducers';

const epicMiddleware = createEpicMiddleware(companiesEpic);

export default createStore(
  companiesReducer,
  applyMiddleware(epicMiddleware)
);
