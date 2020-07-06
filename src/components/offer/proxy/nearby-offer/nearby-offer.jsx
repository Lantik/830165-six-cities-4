import React from 'react';
import Offer from '../../offer.jsx';

const NearbyOffer = (props) => {
  const articleClassName = `near-places__card`;
  const imageWrapperClassName = `near-places__image-wrapper`;

  return (<Offer
    articleClassName={articleClassName}
    imageWrapperClassName={imageWrapperClassName}
    {...props} />);
};

export default NearbyOffer;
