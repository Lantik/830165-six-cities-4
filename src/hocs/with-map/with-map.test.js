import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import withMap from './with-map.js';

const MockComponent = ({forwardRef}) => {
  return (<div ref={forwardRef}></div>);
};

MockComponent.propTypes = {
  forwardRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired,
};

const MockComponentWithMap = withMap(MockComponent);

const mock = {
  coords: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198]
  ]
};

it(`"with map" hoc rendered component correctly`, () => {
  const {coords} = mock;
  const mockedHtmlElement = document.createElement(`div`);

  const tree = renderer
    .create(
        <MockComponentWithMap
          coords={coords}
          className=""/>,
        {
          createNodeMock: () => {
            return mockedHtmlElement;
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
