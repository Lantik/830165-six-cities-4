import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const RENT_OFFERS = [
  `Beautiful & luxurious apartment at great location (test)`,
  `Wood and stone place (test)`,
  `Stone and wood place (test)`
];

describe(`Offer header`, () => {
  it(`function invoked on single title click`, () => {
    const onOfferHeaderClickHandler = jest.fn();

    const main = shallow(
        <Main
          offers={RENT_OFFERS}
          onOfferHeaderClick={onOfferHeaderClickHandler}
        />
    );

    const header = main.find(`.place-card__name`).first();
    header.simulate(`click`);

    expect(onOfferHeaderClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`function invoked on each title click`, () => {
    const onOfferHeaderClickHandler = jest.fn();

    const main = shallow(
        <Main
          offers={RENT_OFFERS}
          onOfferHeaderClick={onOfferHeaderClickHandler}
        />
    );

    main.find(`.place-card__name`).forEach((it) => {
      it.simulate(`click`);
    });

    expect(onOfferHeaderClickHandler).toHaveBeenCalledTimes(RENT_OFFERS.length);
  });
});
