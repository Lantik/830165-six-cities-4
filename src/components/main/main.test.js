import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Main from './main.jsx';
import {SortType} from '../../const/application.js';

const mock = {
  offers: [
    {
      city: `Amsterdam`,
      coordinates: [52.3809553943508, 4.939309666406198]
    },
    {
      city: `Amsterdam`,
      coordinates: [52.3809553943508, 4.939309666406198]
    },
    {
      city: `Capenhagen`,
      coordinates: [52.3809553943508, 4.939309666406198]
    }]
};

it(`<Main/> rendered correctly with offers in active city`, () => {
  const {offers} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<Main
    offers={offers}
    activeCity={`Amsterdam`}
    onOfferHeaderClick={() => {}}
    onCityTitleClick={() => {}}
    onSortOptionClick={() => {}}
    sortType={SortType.DEFAULT}
  />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});

it(`<Main /> rendered correcyly without offers in active city`, () => {
  const {offers} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<Main
    offers={offers}
    activeCity={`London`}
    onOfferHeaderClick={() => {}}
    onCityTitleClick={() => {}}
    onSortOptionClick={() => {}}
    sortType={SortType.DEFAULT}
  />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});

