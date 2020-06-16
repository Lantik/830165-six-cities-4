import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const RENT_OFFERS = [
  `Beautiful & luxurious apartment at great location (test)`,
  `Wood and stone place (test)`,
  `Stone and wood place (test)`
];

it(`<Main/> rendered correctly`, () => {
  const tree = renderer
    .create(<Main
      offers={RENT_OFFERS}
      onOfferHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
