import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map.jsx';

const mock = {
  className: `test__map`,
  forwardRef: React.createRef()
};

it(`<Map/> rendered correctly`, () => {
  const {className, forwardRef} = mock;

  const tree = renderer
    .create(<Map
      className={className}
      forwardRef={forwardRef}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
