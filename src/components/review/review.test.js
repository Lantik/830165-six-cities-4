import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

const mock = {
  review: {
    userName: `Max`,
    avatar: `img/avatar.svg`,
    rating: 70,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: new Date(`2009/04/19`)
  }
};

it(`<Review/> rendered correcty`, () => {
  const {review} = mock;

  const tree = renderer
    .create(<Review
      review={review}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
