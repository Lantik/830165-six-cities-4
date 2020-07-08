import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import OfferDetails from '../offer-details/offer-details.jsx';
import {ActionCreator} from '../../reducer/reducer.js';

const APP_SCREENS = {
  MAIN: `Offer List`,
  OFFER_PROPERTY: `Offer Property`
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      screen: APP_SCREENS.MAIN,
    };
  }

  _renderAccomodationScreen() {
    const {
      offers,
      city,
      onCityTitleClick,
      onSortOptionClick,
      sortType,
      onOfferCardMouseEnter,
      offer: activOffer,
      onOfferHeaderClick
    } = this.props;
    const {screen} = this.state;

    switch (screen) {
      case APP_SCREENS.MAIN:
        return (
          <Main
            offers = {offers}
            activeCity={city}
            onOfferHeaderClick={(offer) => {
              this.setState({
                screen: APP_SCREENS.OFFER_PROPERTY,
              });
              onOfferHeaderClick(offer);
            }}
            onCityTitleClick={onCityTitleClick}
            sortType={sortType}
            onSortOptionClick={onSortOptionClick}
            onOfferCardMouseEnter={onOfferCardMouseEnter}
            offer={activOffer}
          />);
      case APP_SCREENS.OFFER_PROPERTY:
        return (
          <OfferDetails
            offer={activOffer}
            offers={offers}
            onOfferHeaderClick={(offer) => {
              this.setState({
                screen: APP_SCREENS.OFFER_PROPERTY,
              });
              onOfferHeaderClick(offer);
            }}/>
        );
      default :
        return null;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderAccomodationScreen()}
          </Route>
          <Route exact path="/dev-component">
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  onOfferCardMouseEnter: PropTypes.func.isRequired,
  offer: PropTypes.object,
  onOfferHeaderClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  sortType: state.sortType,
  offer: state.offer
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeActiveOffer(undefined));
  },
  onSortOptionClick(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
  onOfferCardMouseEnter(offer) {
    dispatch(ActionCreator.changeActiveOffer(offer));
  },
  onOfferHeaderClick(offer) {
    dispatch(ActionCreator.changeActiveOffer(offer));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
