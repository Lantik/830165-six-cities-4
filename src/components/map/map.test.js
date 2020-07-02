import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const mock = {
  offersCoords: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198]
  ]
};

it(`<Map/> rendered correctly`, () => {
  const {offersCoords} = mock;
  const mockedHtmlElement = document.createElement(`div`);

  const tree = renderer
    .create(<Map
      offersCoords={offersCoords} />, {
      createNodeMock: () => {
        return mockedHtmlElement;
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
