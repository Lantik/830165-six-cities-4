import React from 'react';
import PropTypes from 'prop-types';

const CityList = ({activeCity, cities, onCityTitleClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((it) => (
        <li className="locations__item" key={it} onClick={() => onCityTitleClick(it)}>
          <a className={`locations__item-link tabs__item ${activeCity === it ? `tabs__item--active` : ``}`} href="#">
            <span>{it}</span>
          </a>
        </li>
      ))}
    </ul>);
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired
};

export default CityList;
