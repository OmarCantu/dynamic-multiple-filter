import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';
import { COMPANY } from '../../constants/dummyData';

const wrapper = shallow(
  <Card company={COMPANY} />
);

test('Card has two FontAwesomeIcon components', () => {
  expect(wrapper.find('FontAwesomeIcon')).toHaveLength(2);
});

test('Card has one img tag', () => {
  expect(wrapper.find('img')).toHaveLength(1);
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});



