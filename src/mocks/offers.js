export default [
  {
    id: 1,
    price: 30,
    rating: 3.3,
    name: `Beautiful & luxurious apartment at great location`,
    type: `apartment`,
    inBookmarks: true,
    description: `Reprehenderit anim elit cillum officia ut proident dolore ea. Duis laborum elit aliqua reprehenderit ipsum exercitation consequat dolore incididunt. Do adipisicing deserunt do enim id proident velit enim minim in sit labore cupidatat. Nulla cupidatat excepteur id Lorem magna. Voluptate mollit dolor in nostrud qui elit laboris labore.`,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    isPremium: false,
    bedroomsCount: 1,
    maxGuestsNumber: 3,
    conveniences: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    coordinates: [52.3909553943508, 4.85309666406198],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    reviews: [
      {
        id: 2,
        userName: `Katya`,
        avatar: `img/avatar-angelina.jpg`,
        rating: 20,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(`2009/02/19`)
      },
      {
        id: 3,
        userName: `Helen`,
        avatar: `img/avatar-max.jpg`,
        rating: 99,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(`2009/04/19`)
      }
    ],
    nearByOffers: [2, 3, 4]
  },
  {
    id: 2,
    price: 54,
    rating: 3.8,
    name: `Wood and stone place`,
    type: `hotel`,
    inBookmarks: true,
    description: `Reprehenderit anim elit cillum officia ut proident dolore ea. Duis laborum elit aliqua reprehenderit ipsum exercitation consequat dolore incididunt. Do adipisicing deserunt do enim id proident velit enim minim in sit labore cupidatat. Nulla cupidatat excepteur id Lorem magna. Voluptate mollit dolor in nostrud qui elit laboris labore.`,
    photos: [`img/apartment-02.jpg`, `img/apartment-02.jpg`],
    isPremium: true,
    bedroomsCount: 2,
    maxGuestsNumber: 2,
    coordinates: [52.369553943508, 4.85309666406198],
    conveniences: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    },
    reviews: [
      {
        id: 1,
        userName: `Vlad`,
        avatar: `img/avatar-angelina.jpg`,
        rating: 10,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(`2005/01/19`)
      }
    ],
    nearByOffers: [1, 3, 4]
  },
  {
    id: 3,
    price: 400,
    rating: 5,
    name: `Stone and wood place`,
    type: `room`,
    inBookmarks: true,
    description: `Reprehenderit anim elit cillum officia ut proident dolore ea. Duis laborum elit aliqua reprehenderit ipsum exercitation consequat dolore incididunt. Do adipisicing deserunt do enim id proident velit enim minim in sit labore cupidatat. Nulla cupidatat excepteur id Lorem magna. Voluptate mollit dolor in nostrud qui elit laboris labore.`,
    photos: [`img/apartment-03.jpg`],
    isPremium: false,
    bedroomsCount: 3,
    maxGuestsNumber: 1,
    coordinates: [52.3909553943508, 4.929309666406198],
    conveniences: [`Wifi`, `Kitchen`, `Cable TV`],
    owner: {
      name: `Mike`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: false
    },
    reviews: [
      {
        id: 0,
        userName: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: 70,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(`2011/11/23`)
      },
      {
        id: 4,
        userName: `Vlad`,
        avatar: `img/avatar.svg`,
        rating: 10,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(`2005/01/19`)
      }
    ],
    nearByOffers: [1, 4]
  },
  {
    id: 4,
    price: 10,
    rating: 4.1,
    name: `Luxurious & Beautiful apartment at great location`,
    type: `house`,
    inBookmarks: false,
    description: `Reprehenderit anim elit cillum officia ut proident dolore ea. Duis laborum elit aliqua reprehenderit ipsum exercitation consequat dolore incididunt. Do adipisicing deserunt do enim id proident velit enim minim in sit labore cupidatat. Nulla cupidatat excepteur id Lorem magna. Voluptate mollit dolor in nostrud qui elit laboris labore.`,
    photos: [`img/apartment-small-03.jpg`, `img/apartment-small-03.jpg`, `img/apartment-small-03.jpg`],
    isPremium: true,
    bedroomsCount: 4,
    maxGuestsNumber: 5,
    coordinates: [52.3809553943508, 4.939309666406198],
    conveniences: [`Kitchen`, `Cable TV`],
    owner: {
      name: `John`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: false
    },
    reviews: [
      {
        id: 5,
        userName: `Helen`,
        avatar: `img/avatar.svg`,
        rating: 99,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(`2009/04/19`)
      },
      {
        id: 6,
        userName: `Max`,
        avatar: `img/avatar-max.jpg`,
        rating: 70,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(`2011/11/23`)
      },
      {
        id: 7,
        userName: `Vlad`,
        avatar: `img/avatar-angelina.jpg`,
        rating: 10,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        date: new Date(`2005/01/19`)
      },
    ],
    nearByOffers: [1, 2]
  }
];
