import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Main from './main.jsx';

const mock = {
  offers: [
    {
      coordinates: [52.3809553943508, 4.939309666406198]
    },
    {
      coordinates: [52.3809553943508, 4.939309666406198]
    },
    {
      coordinates: [52.3809553943508, 4.939309666406198]
    }]
};

it(`<Main/> rendered correctly`, () => {
  const {offers} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<Main offers={offers} onOfferHeaderClick={() => {}}/>);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
