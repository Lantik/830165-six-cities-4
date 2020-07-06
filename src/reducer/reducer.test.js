import {reducer, ActionType, ActionCreator} from './reducer.js';

describe(`Reducer`, () => {
  it(`Reducer returns initial state if state parameter is not provided`, () => {
    const result = reducer(void 0, {});

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
