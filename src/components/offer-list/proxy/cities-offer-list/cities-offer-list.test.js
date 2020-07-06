import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CitiesOfferList from './cities-offer-list.jsx';

const mock = {
  offers: [{}, {}, {}]
};

it(`<CitiesOfferList /> rendered correctly`, () => {
  const {offers} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<CitiesOfferList
    offers={offers}
    onOfferHeaderClick={() => {}}
  />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
