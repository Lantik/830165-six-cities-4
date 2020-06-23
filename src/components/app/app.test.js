import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mock = {
  offers: [
    {
      id: 1,
      price: 30,
      rating: 43,
      name: `Beautiful & luxurious apartment at great location`,
      src: `img/apartment-01.jpg`,
      type: `Apartment`,
      inBookmarks: true
    },
    {
      id: 2,
      price: 54,
      rating: 67,
      name: `Wood and stone place`,
      src: `img/apartment-02.jpg`,
      type: `Apartment`,
      inBookmarks: true
    },
    {
      id: 3,
      price: 400,
      rating: 100,
      name: `Stone and wood place`,
      src: `img/apartment-03.jpg`,
      type: `Apartment`,
      inBookmarks: true
    },
    {
      id: 4,
      price: 10,
      rating: 70,
      name: `Luxurious & Beautiful apartment at great location`,
      src: `img/apartment-small-03.jpg`,
      type: `Apartment`,
      inBookmarks: false
    }
  ]
};

it(`<App/> rendered correctly`, () => {
  const {offers} = mock;
  const tree = renderer
    .create(<App
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
