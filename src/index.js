import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './components/app/app.jsx';
import {reducer} from './reducer/reducer.js';
import offers from './mocks/offers.js';


ReactDOM.render(
    <App
      offers={offers}
    ></App>,
    document.querySelector(`#root`)
);
