import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import ShowCard from '../showCard';
import Search from '../search';

test('Search renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of ShowCards', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
})
