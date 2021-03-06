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
});

test('Search should render correct number of shows based on search term', () => {
  const component = shallow(<Search />);
  const searchWord = 'black';
  component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show =>
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0,
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});
