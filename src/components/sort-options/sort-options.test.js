import React from 'react';
import renderer from 'react-test-renderer';
import SortOptions from './sort-options.jsx';
import {SortType} from '../../const/application.js';

it(`<SortOptions/> rendered correctly`, () => {
  const tree = renderer
    .create(<SortOptions
      sortType={SortType.DEFAULT}
      onSortOptionClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
