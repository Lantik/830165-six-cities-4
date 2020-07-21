import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty.jsx';

it(`<MainEmpty /> rendered correctly`, () => {
  const city = `London`;

  const tree = renderer
    .create(<MainEmpty city={city}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`<MainEmpty /> rendered correctly without city`, () => {
  const tree = renderer
    .create(<MainEmpty/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
