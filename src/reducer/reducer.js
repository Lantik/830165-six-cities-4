import {extend} from '../utils/common/common.js';
import offers from '../mocks/offers.js';

const initialState = {
  city: offers.length > 0 && offers[0].city.name,
  offers: offers 
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  })
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.CHANGE_CITY: {
      return extend(state, {
        city: action.payload
      });
    }
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

