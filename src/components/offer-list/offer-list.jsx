import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Offer from '../offer/offer.jsx';

class OfferList extends PureComponent {
  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <Offer
            key={offer.id}
            offer={offer}
            onOfferHeaderClick={() => {}}
            onMouseEnter={(card) => {
              this.setState({activeCard: card});
            }}
          />)}
      </div>
    );
  }
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OfferList;
