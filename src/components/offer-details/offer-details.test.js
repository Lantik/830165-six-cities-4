import React from 'react';
import renderer from 'react-test-renderer';
import OrderDetails from './offer-details.jsx';

const mock = {
  offer: {
    id: 1,
    price: 30,
    rating: 3.3,
    name: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    inBookmarks: true,
    description: `Reprehenderit anim elit cillum officia ut proident dolore ea. Duis laborum elit aliqua reprehenderit ipsum exercitation consequat dolore incididunt. Do adipisicing deserunt do enim id proident velit enim minim in sit labore cupidatat. Nulla cupidatat excepteur id Lorem magna. Voluptate mollit dolor in nostrud qui elit laboris labore.`,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isPremium: true,
    bedroomsCount: 1,
    maxGuestsNumber: 3,
    conveniences: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    }
  }
};

it(`<OrderDetails/> component rendered correctly`, () => {
  const {offer} = mock;
  const tree = renderer
    .create(<OrderDetails
      offer={offer}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

