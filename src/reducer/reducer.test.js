import {reducer, ActionType, ActionCreator} from './reducer.js';

describe(`Reducer`, () => {
  it(`Reducer has default state`, () => {
    const result = reducer(undefined, {});

    expect(result).toBeDefined();
  });

  it(`Reducer changes city`, () => {
    const state = {city: `Amsterdam`};

    const result = reducer(state, {
      type: ActionType.CHANGE_CITY,
      payload: `Copenhagen`
    });

    const expectedResult = {city: `Copenhagen`};
    expect(result).toEqual(expectedResult);
  });

  it(`Reducer changes sortType`, () => {
    const state = {sortType: `By Id`};

    const result = reducer(state, {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `By Name`
    });

    const expectedResult = {sortType: `By Name`};
    expect(result).toEqual(expectedResult);
  });

  it(`Reducer changes active offer`, () => {
    const state = {offer: {id: 1}};
    const newOffer = {id: 2};

    const result = reducer(state, {
      type: ActionType.CHANGE_OFFER,
      payload: newOffer
    });

    const expectedResult = {offer: newOffer};
    expect(result).toEqual(expectedResult);
  });
});

describe(`Action Creator`, () => {
  it(`Action Creator changes city`, () => {
    const state = {city: `Copenhagen`};

    const result = reducer(state, ActionCreator.changeCity(`Amsterdam`));

    const expectedResult = {city: `Amsterdam`};
    expect(result).toEqual(expectedResult);
  });

  it(`Action Creator changes sortType`, () => {
    const state = {sortType: `By Id`};

    const result = reducer(state, ActionCreator.changeSortType(`By Name`));

    const expectedResult = {sortType: `By Name`};
    expect(result).toEqual(expectedResult);
  });

  it(`Action Creator changes active offer`, () => {
    const state = {offer: {id: 1}};
    const newOffer = {id: 2};

    const result = reducer(state, ActionCreator.changeActiveOffer(newOffer));

    const expectedResult = {offer: newOffer};
    expect(result).toEqual(expectedResult);
  });
});
