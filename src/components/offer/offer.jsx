import React from 'react';
import PropTypes from 'prop-types';

const Offer = ({offer, onOfferHeaderClick, onMouseEnter}) => {
  const {name, price, rating, src, type, inBookmarks} = offer;
  const bookmarkHiddenText = inBookmarks ? `In Bookmarks` : `To bookmarks`;
  const bookmarkIcon = inBookmarks ? `#icon-bookmark-active` : `#icon-bookmark`;

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onMouseEnter(offer)}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={src} width="260" height="200" alt={name}/>
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
            <span style={{width: rating + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onOfferHeaderClick}>
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
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inBookmarks: PropTypes.bool.isRequired
  }).isRequired
};

export default Offer;
