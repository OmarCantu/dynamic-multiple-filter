import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

const wrapper = shallow(
  <Container className="custom" />
);

test('Container has class "custom"', () => {
  expect(wrapper.find('.custom')).toHaveLength(1);
});

test('Component matches Snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
