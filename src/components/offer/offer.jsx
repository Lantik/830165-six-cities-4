import React from 'react';
import PropTypes from 'prop-types';
import {calculateRatingPercentage} from '../../utils/offer/offer.js';

const Offer = ({offer, onOfferHeaderClick, onMouseEnter, articleClassName, imageWrapperClassName}) => {
  const {name, price, rating, isPremium, photos, type, inBookmarks} = offer;
  const bookmarkHiddenText = inBookmarks ? `In Bookmarks` : `To bookmarks`;
  const bookmarkIcon = inBookmarks ? `#icon-bookmark-active` : `#icon-bookmark`;
  const ratingPercentage = calculateRatingPercentage(rating);
  const photo = photos[0];

  return (
    <article className={`${articleClassName} place-card`} onMouseEnter={() => onMouseEnter(offer)}>
      {isPremium &&
        (<div className="place-card__mark">
          <span>Premium</span>
        </div>
        )}
      <div className={`${imageWrapperClassName} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={photo} width="260" height="200" alt={name}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref={bookmarkIcon}></use>
            </svg>
            <span className="visually-hidden">{bookmarkHiddenText}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercentage + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={() => onOfferHeaderClick(offer)}>
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  onOfferHeaderClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  articleClassName: PropTypes.string.isRequired,
  imageWrapperClassName: PropTypes.string.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inBookmarks: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default Offer;
