import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';

class OfferList extends PureComponent {
  render() {
    const {offers, onOfferHeaderClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <Offer
            key={offer.id}
            offer={offer}
            onOfferHeaderClick={onOfferHeaderClick}
            onMouseEnter={(card) => {
              this.setState({activeCard: card});
            }}
          />)}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired,
  onOfferHeaderClick: PropTypes.func.isRequired
};

export default OfferList;