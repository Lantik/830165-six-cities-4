import React from 'react';
import Offer from '../../offer.jsx';

const CitiesOffer = (props) => {
  const articleClassName = `cities__place-card`;
  const imageWrapperClassName = `cities__image-wrapper`;

  return (<Offer
    articleClassName={articleClassName}
    imageWrapperClassName={imageWrapperClassName}
    {...props} />);
};

export default CitiesOffer;
