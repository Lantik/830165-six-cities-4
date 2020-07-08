import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {SortType} from '../../const/application.js';

const SORT_TYPE_TO_SORT_TEXT = {
  [SortType.DEFAULT]: `Popular`,
  [SortType.PRICE_LOW_TO_HIGH]: `Price: low to high`,
  [SortType.PRICE_HIGH_TO_LOW]: `Price: high to low`,
  [SortType.RATE_HIGHT_TO_LOW]: `Top rated first`
};

const SortOptions = ({onSortOptionClick, sortType}) => {
  const sortTypes = Object.keys(SORT_TYPE_TO_SORT_TEXT);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabindex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortTypes.map(x => (
          <li className={`places__option ${x == sortType ? `places__option--active` : ``}`} 
              tabindex="0"
              onClick={() => onSortOptionClick(x)}
              key={x}
          >
            {SORT_TYPE_TO_SORT_TEXT[x]}
          </li>
        ))}
      </ul>
    </form>
  )
}

SortOptions.propTypes = {
  onSortOptionClick: PropTypes.func.isRequired,
  sortType: PropTypes.oneOf(Object.values(SortType))
};

export default SortOptions;