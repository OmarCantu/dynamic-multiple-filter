import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';

const onBack = jest.fn();
const onNext = jest.fn();

const wrapper = shallow(
  <Pagination 
    className="custom"
    currentPage={1}
    numberOfResults={9}
    onBack={onBack}
    onNext={onNext}
    resultsPerPage={9}
  />
);

test('Pagination does not show when numberOfResults <= resultsPerPage', () => {
  expect(wrapper.find('li')).toHaveLength(0);
});

test('Pagination does show when numberOfResults > resultsPerPage', () => {
  wrapper.setProps({ numberOfResults: 13 });
  expect(wrapper.find('li').length).toBeGreaterThanOrEqual(1);
});

test('Pagination has 3 li tags when numberOfResults = 13 and numberOfResults = 9', () => {
  expect(wrapper.find('li')).toHaveLength(3);
});

test('Pagination has class "custom"', () => {
  expect(wrapper.find('.custom')).toHaveLength(1);
});

test('Pagination has a FontAwesomeIcon component', () => {
  expect(wrapper.find('FontAwesomeIcon')).toHaveLength(1);
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});



