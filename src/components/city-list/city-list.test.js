import React from 'react';
import renderer from 'react-test-renderer';
import CityList from './city-list.jsx';

const mock = {
  cities: [`Amsterdam`, `Dusseldorf`, `London`, `Paris`]
};

it(`<CityList/> renders correctly`, () => {
  const {cities} = mock;

  const tree = renderer
    .create(<CityList
      cities={cities}
      activeCity={`Amsterdam`}
      onCityTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
