import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';

const mock = {
  offer: {
    id: 1,
    price: 1,
    rating: 1,
    name: `Not really cool place`,
    src: `apartment-small-03.jpg`,
    type: `Apartment`,
    inBookmarks: true
  }
};

it(`<Offer/> rendered correctly`, () => {
  const {offer} = mock;

  const tree = renderer
    .create(<Offer
      offer={offer}
      onMouseEnter={() => {}}
      onOfferHeaderClick={() => {}}
    />);

  expect(tree).toMatchSnapshot();
});
