import React from 'react';
import { shallow } from 'enzyme';

import { COMPANIES, COMPANIES_ACTIONS } from '../constants/dummyData';

import App from './App';

test('renders without crashing', () => {
  shallow(
    <App 
      companies={COMPANIES}
      companiesActions={COMPANIES_ACTIONS} 
    />
  );
});

