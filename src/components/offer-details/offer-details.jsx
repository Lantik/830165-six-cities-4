import React from 'react';
import PropTypes from 'prop-types';
import ReviewList from '../review-list/review-list.jsx';
import NearByOfferList from '../offer-list/proxy/nearby-offer-list/nearby-offer-list.jsx';
import Map from '../map/map.jsx';
import {calculateRatingPercentage} from '../../utils/offer/offer.js';
import {ACCOMODATION_TYPES} from '../../const/offer.js';

const OfferDetails = ({offer, offers, onOfferHeaderClick}) => {
  const {
    name,
    price,
    rating,
    type,
    description,
    photos,
    isPremium,
    bedroomsCount,
    maxGuestsNumber,
    conveniences,
    owner,
    reviews,
    coordinates: offerCoords
  } = offer;

  const ratingPercentage = calculateRatingPercentage(rating);
  const accomodationType = ACCOMODATION_TYPES[type];
  const offerLimitedPhotos = photos.slice(0, 6);

  const nearByOffers = offers.filter((it) => offer.nearByOffers.includes(it.id));
  const nearByOffersCoordinates = nearByOffers.map((it) => it.coordinates);
  const reviewAmount = reviews.length;

  return (<div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offerLimitedPhotos.map((photo, i) => (
              <div className="property__image-wrapper" key={i}>
                <img className="property__image" src={photo} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {name}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: ratingPercentage + `%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {accomodationType}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedroomsCount} Bedroom{bedroomsCount > 1 && `s`}
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxGuestsNumber} adult{maxGuestsNumber > 1 && `s`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {conveniences.map((convenience) => (
                  <li className="property__inside-item" key={convenience}>
                    {convenience}
                  </li>
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`${owner.isSuper && `property__avatar-wrapper--pro`} property__avatar-wrapper user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={owner.avatar} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {owner.name}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">{description}</p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewAmount}</span></h2>
              <ReviewList reviews={reviews}/>
              <form className="reviews__form form" action="#" method="post">
                <label className="reviews__label form__label" htmlFor="review">Your review</label>
                <div className="reviews__rating-form form__rating">
                  <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                  <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                  <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                  <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                  <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>

                  <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                  <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                    <svg className="form__star-image" width="37" height="33">
                      <use xlinkHref="#icon-star"></use>
                    </svg>
                  </label>
                </div>
                <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                <div className="reviews__button-wrapper">
                  <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                  </p>
                  <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <Map className={`property__map`} coords={nearByOffersCoordinates} activeCoords={offerCoords}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <NearByOfferList offers={nearByOffers} onOfferHeaderClick={onOfferHeaderClick} onOfferCardMouseEnter={() => {}}/>
        </section>
      </div>
    </main>
  </div>);
};

const offerShape = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inBookmarks: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxGuestsNumber: PropTypes.number.isRequired,
  conveniences: PropTypes.arrayOf(PropTypes.string).isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired
  }).isRequired,
  nearByOffers: PropTypes.arrayOf(PropTypes.number).isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
};

OfferDetails.propTypes = {
  onOfferHeaderClick: PropTypes.func.isRequired,
  offer: PropTypes.shape(offerShape).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired
};

export default OfferDetails;
