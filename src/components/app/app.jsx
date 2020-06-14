import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offersCount} = props;

  return <React.Fragment>
    <Main offersCount={offersCount}></Main>
  </React.Fragment>;
};

export default App;
