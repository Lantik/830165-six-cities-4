import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class OfferList extends PureComponent {
  render() {
    const {
      offers,
      onOfferHeaderClick,
      className,
      offerComponent: Offer,
      onOfferCardMouseEnter
    } = this.props;

    return (
      <div className={className}>
        {offers.map((offer) =>
          <Offer
            key={offer.id}
            offer={offer}
            onOfferHeaderClick={onOfferHeaderClick}
            onMouseEnter={(card) => {
              this.setState({activeCard: card});
              onOfferCardMouseEnter(offer);
            }}
          />)}
      </div>
    );
  }
}

OfferList.propTypes = {
  offerComponent: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onOfferHeaderClick: PropTypes.func.isRequired,
  onOfferCardMouseEnter: PropTypes.func.isRequired
};

export default OfferList;
