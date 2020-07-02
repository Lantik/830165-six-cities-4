import React from 'react';
import PropTypes from 'prop-types';
import {MONTHS} from '../../const/date.js';

const getDateForTimeTag = (date) => {
  const day = date.getDate();
  const monthNum = date.getMonth();
  const year = date.getFullYear();

  const formattedMonthNum = monthNum < 10 ? `0${monthNum}` : `${monthNum}`;
  const monthName = MONTHS[monthNum];

  const dateTimeValue = `${year}-${formattedMonthNum}-${day}`;
  const dateTimeText = `${monthName} ${year}`;

  return {
    dateValue: dateTimeValue,
    dateText: dateTimeText
  };
};

const Review = ({review}) => {
  const {userName, rating, text, date, avatar} = review;
  const {dateText, dateValue} = getDateForTimeTag(date);

  return (
    <React.Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: rating + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={dateValue}>{dateText}</time>
      </div>
    </React.Fragment>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};

export default Review;
