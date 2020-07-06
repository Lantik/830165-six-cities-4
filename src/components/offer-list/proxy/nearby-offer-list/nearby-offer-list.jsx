import React from 'react';
import OfferList from '../../offer-list.jsx';
import NearbyOffer from '../../../offer/proxy/nearby-offer/nearby-offer.jsx';

const NearbyOfferList = (props) => {
  const className = `near-places__list places__list tabs__content`;

  return (<OfferList className={className} offerComponent={NearbyOffer} {...props}/>);
};

export default NearbyOfferList;
