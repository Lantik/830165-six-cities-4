import React from 'react';
import PropTypes from 'prop-types';
import withMap from '../../hocs/with-map/with-map.js';

const Map = ({forwardRef, className}) => {
  const containerClassName = `${className} map`;

  return (
    <section id="map"
      ref={forwardRef}
      className={containerClassName}>
    </section>);
};

Map.propTypes = {
  forwardRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}).isRequired,
  className: PropTypes.string.isRequired
};

export {Map};
export default withMap(Map);
