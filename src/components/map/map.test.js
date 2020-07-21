import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map.jsx';

const mock = {
  className: `test__map`,
  mapRef: React.createRef()
};

it(`<Map/> rendered correctly`, () => {
  const {className, mapRef} = mock;

  const tree = renderer
    .create(<Map
      className={className}
      mapRef={mapRef}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
