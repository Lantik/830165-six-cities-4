import React from 'react';
import PropTypes from 'prop-types';

const OfferList = ({offers, onOfferHeaderClick, className, offerComponent: Offer, onOfferCardMouseEnter}) => {
  return (
    <div className={className}>
      {offers.map((offer) =>
        <Offer
          key={offer.id}
          offer={offer}
          onOfferHeaderClick={onOfferHeaderClick}
          onMouseEnter={onOfferCardMouseEnter}
        />)}
    </div>
  );
};

OfferList.propTypes = {
  offerComponent: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onOfferHeaderClick: PropTypes.func.isRequired,
  onOfferCardMouseEnter: PropTypes.func.isRequired
};

export default OfferList;
