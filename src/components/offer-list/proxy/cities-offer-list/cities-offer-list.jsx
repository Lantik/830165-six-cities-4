import React from 'react';
import OfferList from '../../offer-list.jsx';
import CitiesOffer from '../../../offer/proxy/cities-offer/cities-offer.jsx';

const CitiesOfferList = (props) => {
  const className = `cities__places-list places__list tabs__content`;

  return (<OfferList className={className} offerComponent={CitiesOffer} {...props}/>);
};

export default CitiesOfferList;
