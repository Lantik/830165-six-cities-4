import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CityList from './city-list.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  cities: [`Amsterdam`, `Dusseldorf`, `London`, `Paris`]
};

it(`Callback function invoked on city title click`, () => {
  const {cities} = mock;
  const handleCityTitleClick = jest.fn();

  const component = shallow(<CityList
    cities={cities}
    activeCity={`Amsterdam`}
    onCityTitleClick={handleCityTitleClick}
  />);

  const city = component.find(`.locations__item`).first();
  city.simulate(`click`);

  expect(handleCityTitleClick).toHaveBeenCalledTimes(1);
});

it(`City name passed as a callback function parameter on city title click`, () => {
  const {cities} = mock;
  const handleCityTitleClick = jest.fn();

  const component = shallow(<CityList
    cities={cities}
    activeCity={`Amsterdam`}
    onCityTitleClick={handleCityTitleClick}
  />);

  const city = component.find(`.locations__item`).first();
  city.simulate(`click`);

  expect(handleCityTitleClick.mock.calls[0][0]).toBe(`Amsterdam`);
});
