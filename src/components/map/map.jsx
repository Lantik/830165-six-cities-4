import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';

const ICON_PATH = `img/pin.svg`;
const ICON_SIZE = [30, 30];
const ZOOM = 12;
const CITY_COORDS = [52.38333, 4.9];

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  componentDidMount() {
    const {offersCoords} = this.props;
    const mapElement = this._mapRef.current;

    const icon = Leaflet.icon({iconUrl: ICON_PATH, iconSize: ICON_SIZE});
    const map = Leaflet.map(mapElement).setView(CITY_COORDS, ZOOM);
    Leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    offersCoords.forEach((it) => Leaflet.marker(it, {icon}).addTo(map));
  }

  render() {
    return (
      <section id="map"
        ref={this._mapRef}
        className="cities__map map">
      </section>
    );
  }
}

Map.propTypes = {
  offersCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};

export default Map;
