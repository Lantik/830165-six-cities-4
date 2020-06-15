import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const RENT_OFFERS = [
  `Beautiful & luxurious apartment at great location (test)`,
  `Wood and stone place (test)`,
  `Stone and wood place (test)`
];

it(`<App/> rendered correctly`, () => {
  const tree = renderer
    .create(<App
      offers={RENT_OFFERS}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
