import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const settings = {
  OFFERS_COUNT: 500
};

ReactDOM.render(
    <App
      offersCount={settings.OFFERS_COUNT}
    ></App>,
    document.querySelector(`#root`)
);
