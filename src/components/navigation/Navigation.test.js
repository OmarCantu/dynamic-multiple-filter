import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

const wrapper = shallow(<Navigation className="custom" />);

test('Navigation has class "custom"', () => {
  expect(wrapper.find('.custom')).toHaveLength(1);
});

test('Navigation has one Container component', () => {
  expect(wrapper.find('Container')).toHaveLength(1);
});

test('Navigation has one img tag', () => {
  expect(wrapper.find('img')).toHaveLength(1);
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});



