import {extend} from '../utils/common/common.js';
import offers from '../mocks/offers.js';
import {SortType} from '../const/application.js';

const initialState = {
  city: offers[0].city,
  offers,
  sortType: SortType.DEFAULT
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return extend(state, {
        city: action.payload
      });
    }
    case ActionType.CHANGE_SORT_TYPE: {
      return extend(state, {
        sortType: action.payload
      });
    }
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

