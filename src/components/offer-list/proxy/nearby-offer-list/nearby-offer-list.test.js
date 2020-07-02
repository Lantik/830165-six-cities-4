import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NearbyOfferList from './nearby-offer-list.jsx';

const mock = {
  offers: [{}, {}, {}]
};

it(`<NearbyOfferList /> rendered correctly`, () => {
  const {offers} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<NearbyOfferList
    offers={offers}
    onOfferHeaderClick={() => {}}
  />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
