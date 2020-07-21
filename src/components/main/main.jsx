import React from 'react';
import PropTypes from 'prop-types';
import CitiesOfferList from '../offer-list/proxy/cities-offer-list/cities-offer-list.jsx';
import CityList from '../city-list/city-list.jsx';
import SortOptions from '../sort-options/sort-options.jsx';
import Map from '../map/map.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';
import {SortType} from '../../const/application.js';

const getSortFunction = (sortType) => {
  switch (sortType) {
    case SortType.PRICE_LOW_TO_HIGH:
      return (a, b) => a.price - b.price;
    case SortType.PRICE_HIGH_TO_LOW:
      return (a, b) => b.price - a.price;
    case SortType.RATE_HIGHT_TO_LOW:
      return (a, b) => a.rating - b.rating;
    default:
      return undefined;
  }
};

const Main = (props) => {
  const {
    offers,
    onOfferHeaderClick,
    onCityTitleClick,
    activeCity,
    onSortOptionClick,
    sortType,
    onOfferCardMouseEnter,
    offer
  } = props;

  const cityOffers = offers.filter((it) => it.city === activeCity)
    .sort(getSortFunction(sortType));
  const offersCoords = cityOffers.map((it) => it.coordinates);
  const cities = offers.map((it) => it.city)
    .filter((it, i, self) => self.indexOf(it) === i);
  const mainEmptyClass = cityOffers.length === 0 ? `page__main--index-empty` : ``;
  const activeOfferCoords = offer && offer.coordinates;

  return (<div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className={`page__main page__main--index ${mainEmptyClass}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList
            cities={cities}
            onCityTitleClick={onCityTitleClick}
            activeCity={activeCity}
          />
        </section>
      </div>
      <div className="cities">
        {cityOffers.length === 0
          ? (<MainEmpty />)
          : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {activeCity}</b>
                <SortOptions onSortOptionClick={onSortOptionClick} sortType={sortType}/>
                <CitiesOfferList
                  offers={cityOffers}
                  onOfferHeaderClick={onOfferHeaderClick}
                  onOfferCardMouseEnter={onOfferCardMouseEnter}
                />
              </section>
              <div className="cities__right-section">
                <Map className={`cities__map`} coords={offersCoords} activeCoords={activeOfferCoords}/>
              </div>
            </div>
          )}
      </div>
    </main>
  </div>);
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferHeaderClick: PropTypes.func.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string,
  onSortOptionClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onOfferCardMouseEnter: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  })
};

export default Main;
