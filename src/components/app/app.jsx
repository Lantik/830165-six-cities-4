import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({offers}) => {
  return (<React.Fragment>
    <Main
      offers={offers}
      onOfferHeaderClick={() => {}}
    />
  </React.Fragment>);
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
