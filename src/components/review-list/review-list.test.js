import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReviewList from './review-list.jsx';
import Review from '../review/review.jsx';
import {doWithoutPropTypes} from '../../utils/testing/testing.js';

const mock = {
  reviews: [
    {id: 0}, 
    {id: 1}, 
    {id: 2}, 
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13}
  ]
};

it(`<ReviewList /> rendered correctly`, () => doWithoutPropTypes([Review], () => {
  const {reviews} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<ReviewList reviews={reviews} />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
}));
