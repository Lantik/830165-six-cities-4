import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import OfferList from './offer-list.jsx';

const mock = {
  offers: [{id: 1}, {id: 2}, {id: 3}],
  className: `test-class-name`,

};

const mockComponent = () => {
  return (<div></div>);
};

it(`<OfferList/> rendered correctly`, () => {
  const {offers, className} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<OfferList
    offers={offers}
    onOfferHeaderClick={() => {}}
    className={className}
    offerComponent={mockComponent}
    onOfferCardMouseEnter={() => {}}
  />);

  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
});
