import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Offer from './offer.jsx';

configure({
  adapter: new Adapter()
});

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

it(`Callback function invoked on offer mouse enter`, () => {
  const {offer} = mock;
  const handleCardMouseEnter = jest.fn();
  const component = shallow(<Offer
    offer={offer}
    onOfferHeaderClick={() => {}}
    onMouseEnter={handleCardMouseEnter}
  />);

  const card = component.find(`article`).first();
  card.simulate(`mouseEnter`);

  expect(handleCardMouseEnter).toHaveBeenCalledTimes(1);
});

it(`Offer object passed to callback function on offer mouse enter`, () => {
  const {offer} = mock;
  const handleCardMouseEnter = jest.fn();
  const component = shallow(<Offer
    offer={offer}
    onOfferHeaderClick={() => {}}
    onMouseEnter={handleCardMouseEnter}
  />);

  const card = component.find(`article`).first();
  card.simulate(`mouseEnter`);

  expect(handleCardMouseEnter.mock.calls[0][0]).toMatchObject(offer);
});

it(`Callback function invoked on offer title click`, () => {
  const {offer} = mock;
  const handleOfferHeaderClick = jest.fn();
  const component = shallow(<Offer
    offer={offer}
    onOfferHeaderClick={handleOfferHeaderClick}
    onMouseEnter={() => {}}
  />);

  const card = component.find(`.place-card__name`).first();
  card.simulate(`click`);

  expect(handleOfferHeaderClick).toHaveBeenCalledTimes(1);
});

it(`Offer object passed to callback function on offer title click`, () => {
  const {offer} = mock;
  const handleTitleClick = jest.fn();
  const component = shallow(<Offer
    offer={offer}
    onOfferHeaderClick={handleTitleClick}
    onMouseEnter={() => {}}
  />);

  const card = component.find(`.place-card__name`).first();
  card.simulate(`click`);

  expect(handleTitleClick.mock.calls[0][0]).toMatchObject(offer);
});
