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
    const {offers, city, onCityTitleClick, onSortOptionClick, sortType} = this.props;
    const {offer, screen} = this.state;

    switch (screen) {
      case APP_SCREENS.MAIN:
        return (
          <Main
            offers = {offers}
            activeCity={city}
            onOfferHeaderClick={this._handleOfferTitleClick}
            onCityTitleClick={onCityTitleClick}
            sortType={sortType}
            onSortOptionClick={onSortOptionClick}
          />);
      case APP_SCREENS.OFFER_PROPERTY:
        return (
          <OfferDetails
            offer={offer}
            offers={offers}
            onOfferHeaderClick={this._handleOfferTitleClick}/>
        );
      default :
        return null;
    }
  }

  render() {
    const {offers} = this.props;
    const {offer} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderAccomodationScreen()}
          </Route>
          <Route exact path="/offer">
            <OfferDetails offer={offer} offers={offers} onOfferHeaderClick={this._handleOfferTitleClick}/>
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
  sortType: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  city: state.city,
  sortType: state.sortType
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onSortOptionClick(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
