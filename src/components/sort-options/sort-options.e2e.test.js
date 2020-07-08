import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SortOptions from './sort-options.jsx';
import {SortType} from '../../const/application.js';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Sort options invokes callback function on sort option click`, () => {
  const handleSortOptionClick = jest.fn();

  const component = shallow(<SortOptions
    sortType={SortType.DEFAULT}
    onSortOptionClick={handleSortOptionClick}
  />);
  const sortOption = component.find(`.places__option`).first();
  sortOption.simulate(`click`);

  expect(handleSortOptionClick).toHaveBeenCalledTimes(1);
});

it(`Sort options passes sort type to callback function on sort option click`, () => {
  const handleSortOptionClick = jest.fn();
  const sortTypes = Object.values(SortType);

  const component = shallow(<SortOptions
    sortType={SortType.DEFAULT}
    onSortOptionClick={handleSortOptionClick}
  />);
  const sortOption = component.find(`.places__option`).first();
  sortOption.simulate(`click`);

  expect(sortTypes).toContain(handleSortOptionClick.mock.calls[0][0]);
});
