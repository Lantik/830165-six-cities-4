import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {App} from './app.jsx';
import {doWithoutPropTypes} from '../../utils/testing/testing.js';

const mock = {
  offers: [{city: `Amsterdam`}, {city: `Capenhagen`}, {city: `Test city`}],
  city: `Test city`,
  onCityTitleClick: () => {}
};

it(`<App/> rendered correctly`, () => doWithoutPropTypes([Main, OfferDetails], () => {
  const {offers, city, onCityTitleClick} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<App
    offers={offers}
    city={city}
    onCityTitleClick={onCityTitleClick}
  />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
}));
