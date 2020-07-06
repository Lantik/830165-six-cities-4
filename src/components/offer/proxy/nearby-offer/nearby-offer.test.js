import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NearbyOffer from './nearby-offer.jsx';
import Offer from '../../offer.jsx';
import {doWithoutPropTypes} from '../../../../utils/testing/testing.js';

const mock = {
  offer: {}
};

it(`<NearbyOffer/> rendered correctly`, () => doWithoutPropTypes([Offer], () => {
  const {offer} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<NearbyOffer
    offer={offer}
    onMouseEnter={() => {}}
    onOfferHeaderClick={() => {}}
    articleClassName={`test-class`}
    imageWrapperClassName={`test-class`}
  />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
}));
