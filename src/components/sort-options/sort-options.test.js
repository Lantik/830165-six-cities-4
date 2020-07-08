import React from 'react';
import renderer from 'react-test-renderer';
import SortOptions from './sort-options.jsx';

it(`<SortOptions/> rendered correctly`, () => {
  const tree = renderer
    .create(<SortOptions />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});