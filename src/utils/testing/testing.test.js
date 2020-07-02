import React from 'react';
import {doWithoutPropTypes} from './testing.js';

const MockComponentOne = () => {
  return (<div></div>);
};
MockComponentOne.propTypes = {};

const MockComponentTwo = () => {
  return (<div></div>);
};
MockComponentTwo.propTypes = {};

it(`doWithoutPropTypes function does action without provided components propTypes`, () => {
  doWithoutPropTypes([MockComponentOne, MockComponentTwo], () => {
    expect(MockComponentOne.propTypes).toBeUndefined();
    expect(MockComponentTwo.propTypes).toBeUndefined();
  });
});

it(`doWithoutPropTypes function returns correct proptypes after action ends`, () => {
  const mockComponentOnePropTypes = MockComponentOne.propTypes;
  const mockComponentTwoPropTypes = MockComponentTwo.propTypes;

  doWithoutPropTypes([MockComponentOne, MockComponentTwo], () => {});

  expect(MockComponentOne.propTypes).toBe(mockComponentOnePropTypes);
  expect(MockComponentTwo.propTypes).toBe(mockComponentTwoPropTypes);
});

