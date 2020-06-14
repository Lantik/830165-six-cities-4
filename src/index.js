import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const RENT_OFFERS = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Stone and wood place`
];

ReactDOM.render(
    <App
      offers={RENT_OFFERS}
    ></App>,
    document.querySelector(`#root`)
);
