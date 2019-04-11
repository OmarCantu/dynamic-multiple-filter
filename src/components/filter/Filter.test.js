import React from 'react';
import { shallow } from 'enzyme';

import Filter from './Filter';

import { CATEGORY, ON_FILTER, OPTIONS } from '../../constants/dummyData';

const wrapper = shallow(
  <Filter 
    category={CATEGORY}
    className="custom"
    onFilter={ON_FILTER}
    options={OPTIONS}
  />
);

test('Filter has class "custom"', () => {
  expect(wrapper.find('.custom')).toHaveLength(1);
});

test('Filter has one FontAwesomeIcon component', () => {
  expect(wrapper.find('FontAwesomeIcon')).toHaveLength(1);
});

test('Filters are hidden by default', () => {
  expect(wrapper.find('ul')).toHaveLength(0);
});

test('Filters show up on click', () => {
  wrapper.find('div > div > div').simulate('click');
  expect(wrapper.find('ul')).toHaveLength(1);
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});



