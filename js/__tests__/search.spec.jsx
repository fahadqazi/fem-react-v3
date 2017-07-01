import React from 'react';
import { shallow } from 'enzyme';
import Search from '../search';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
