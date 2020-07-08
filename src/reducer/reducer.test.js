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
});

describe(`Action Creator`, () => {
  it(`Action Creator changes city`, () => {
    const state = {city: `Copenhagen`};

    const result = reducer(state, ActionCreator.changeCity(`Amsterdam`));

    const expectedResult = {city: `Amsterdam`};
    expect(result).toEqual(expectedResult);
  });
});
