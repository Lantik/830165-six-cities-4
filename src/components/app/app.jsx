import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({offers}) => {
  return (<React.Fragment>
    <Main
      offers={offers}
    />
  </React.Fragment>);
};

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
