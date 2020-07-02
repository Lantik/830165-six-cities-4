import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';

const ReviewList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((it) => (
        <li className="reviews__item" key={it.id}>
          <Review review={it} />
        </li>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }))
};

export default ReviewList;
