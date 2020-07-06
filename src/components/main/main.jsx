import React from 'react';
import PropTypes from 'prop-types';
import CitiesOfferList from '../offer-list/proxy/cities-offer-list/cities-offer-list.jsx';
import CityList from '../city-list/city-list.jsx';
import Map from '../map/map.jsx';


const Main = ({offers, onOfferHeaderClick, onCityTitleClick, activeCity}) => {
  const cityOffers = offers.filter((it) => it.city === activeCity);
  const offersCount = cityOffers.length;
  const offersCoords = cityOffers.map((it) => it.coordinates);
  const cities = offers.map((it) => it.city)
    .filter((it, i, self) => self.indexOf(it) === i);
  const mainEmptyClass = offersCount === 0 ? `page__main--index-empty` : ``;

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
        {offersCount === 0
          ? (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property availbale at the moment in {activeCity}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )
          : (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in {activeCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                </form>
                <CitiesOfferList
                  offers={cityOffers}
                  onOfferHeaderClick={onOfferHeaderClick}
                />
              </section>
              <div className="cities__right-section">
                <Map className={`cities__map`} coords={offersCoords} />
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
  activeCity: PropTypes.string.isRequired
};

export default Main;
