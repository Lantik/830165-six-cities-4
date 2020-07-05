import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReviewList from './review-list.jsx';
import Review from '../review/review.jsx';
import {doWithoutPropTypes} from '../../utils/testing/testing.js';

const mock = {
  reviews: [
    {
      id: 0,
      date: Date.UTC(2009, 2, 13)
    }, 
    {
      id: 1,
      date: Date.UTC(2009, 2, 14)
    }, 
    {
      id: 2,
      date: Date.UTC(2009, 2, 15)
    }, 
    {
      id: 3,
      date: Date.UTC(2009, 2, 16)
    },
    {
      id: 4,
      date: Date.UTC(2009, 2, 17)
    },
    {
      id: 5,
      date: Date.UTC(2009, 2, 12)
    },
    {
      id: 6,
      date: Date.UTC(2009, 2, 7)
    },
    {
      id: 7,
      date: Date.UTC(2009, 2, 13)
    },
    {
      id: 8,
      date: Date.UTC(2009, 2, 15)
    },
    {
      id: 9,
      date: Date.UTC(2009, 2, 22)
    },
    {
      id: 10,
      date: Date.UTC(2009, 2, 25)
    },
    {
      id: 11,
      date: Date.UTC(2009, 2, 1)
    },
    {
      id: 12,
      date: Date.UTC(2009, 2, 3)
    },
    {
      id: 13,
      date: Date.UTC(2009, 2, 8)
    }
  ]
};

it(`<ReviewList /> renders only first 10 reviews with sort from new to old`, () => doWithoutPropTypes([Review], () => {
  const {reviews} = mock;
  const renderer = new ShallowRenderer();

  renderer.render(<ReviewList reviews={reviews} />);
  const tree = renderer.getRenderOutput();

  expect(tree).toMatchSnapshot();
}));


