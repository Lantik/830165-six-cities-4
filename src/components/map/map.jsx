import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';

const ICON_PATH = `img/pin.svg`;
const ACTIVE_ICON_PATH = `img/pin-active.svg`;
const ICON_SIZE = [30, 30];
const ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
  }

  _createMap() {
    const {coords, activeCoords} = this.props;
    const mapElement = this._mapRef.current;

    const icon = Leaflet.icon({iconUrl: ICON_PATH, iconSize: ICON_SIZE});
    const activeIcon = Leaflet.icon({iconUrl: ACTIVE_ICON_PATH, iconSize: ICON_SIZE});
    const map = Leaflet.map(mapElement);
    Leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(map);

    coords.forEach((it) => Leaflet.marker(it, {icon}).addTo(map));

    if (activeCoords) {
      Leaflet.marker(activeCoords, {icon: activeIcon}).addTo(map);
    }

    map.fitBounds([...coords, activeCoords])
      .setZoom(ZOOM);

    this.map = map;
  }

  componentDidMount() {
    this._createMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this._createMap();
  }

  render() {
    const {className} = this.props;
    const containerClassName = `${className} map`;

    return (
      <section id="map"
        ref={this._mapRef}
        className={containerClassName}>
      </section>
    );
  }
}

Map.propTypes = {
  activeCoords: PropTypes.arrayOf(PropTypes.number),
  coords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  className: PropTypes.string.isRequired
};

export default Map;
