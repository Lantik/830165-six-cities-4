import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const mock = {
  coords: [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198]
  ],
  className: `test__map`
};

it(`<Map/> rendered correctly`, () => {
  const {coords, className} = mock;
  const mockedHtmlElement = document.createElement(`div`);

  const tree = renderer
    .create(<Map
      coords={coords}
      className={className}
    />, {
      createNodeMock: () => {
        return mockedHtmlElement;
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
