import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CitiesOffer from './cities-offer.jsx';
import Offer from '../../offer.jsx';
import {doWithoutPropTypes} from '../../../../utils/testing/testing.js';

const mock = {
  offer: {}
};

it(`<CitiesOffer/> rendered correctly`, () => doWithoutPropTypes([Offer], () => {
  const {offer} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<CitiesOffer
    offer={offer}
    onMouseEnter={() => {}}
    onOfferHeaderClick={() => {}}
  />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
}));
