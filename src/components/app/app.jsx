import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const APP_SCREENS = {
  MAIN: `Offer List`,
  OFFER_PROPERTY: `Offer Property`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      screen: APP_SCREENS.MAIN,
      offer: props.offers[0]
    };

    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
  }

  _handleOfferTitleClick(offer) {
    this.setState({
      screen: APP_SCREENS.OFFER_PROPERTY,
      offer
    });
  }

  _renderAccomodationScreen() {
    const {offers} = this.props;
    const {offer, screen} = this.state;

    switch (screen) {
      case APP_SCREENS.MAIN:
        return (
          <Main
            offers = {offers}
            onOfferHeaderClick={this._handleOfferTitleClick}
          />);
      case APP_SCREENS.OFFER_PROPERTY:
        return (
          <OfferDetails offer={offer} />
        );
      default :
        return null;
    }
  }

  render() {
    const {offer} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderAccomodationScreen()}
          </Route>
          <Route exact path="/offer">
            <OfferDetails offer={offer}/>
          </Route>
          <Route exact path="/dev-component">
            <OfferDetails offer={offer}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
