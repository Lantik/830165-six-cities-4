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
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    }
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
    conveniences: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: true
    }
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
    conveniences: [`Wifi`, `Kitchen`, `Cable TV`],
    owner: {
      name: `Mike`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: false
    }
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
    conveniences: [`Kitchen`, `Cable TV`],
    owner: {
      name: `John`,
      avatar: `img/avatar-angelina.jpg`,
      isSuper: false
    }
  }
];
