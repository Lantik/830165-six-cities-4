import {extend} from '../utils/common/common.js';
import offers from '../mocks/offers.js';
import {SortType} from '../const/application.js';

const initialState = {
  city: offers[0].city,
  offers,
  sortType: SortType.DEFAULT,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_OFFER: `CHANGE_OFFER`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  changeActiveOffer: (offer) => ({
    type: ActionType.CHANGE_OFFER,
    payload: offer
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
    case ActionType.CHANGE_OFFER: {
      return extend(state, {
        offer: action.payload
      });
    }
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

