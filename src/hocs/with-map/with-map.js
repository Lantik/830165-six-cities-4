import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';

const ICON_PATH = `img/pin.svg`;
const ACTIVE_ICON_PATH = `img/pin-active.svg`;
const ICON_SIZE = [30, 30];
const ZOOM = 12;

const withMap = (Component) => {
  class WithMap extends PureComponent {
    constructor(props) {
      super(props);

      this._mapRef = React.createRef();
      this._markers = [];
    }

    _addMarker(marker, map) {
      this._markers.push(marker);
      marker.addTo(map);
    }

    _updateMarkers(coords, activeCoords) {
      const map = this._map;
      const icon = Leaflet.icon({iconUrl: ICON_PATH, iconSize: ICON_SIZE});
      const activeIcon = Leaflet.icon({iconUrl: ACTIVE_ICON_PATH, iconSize: ICON_SIZE});
      const markersCount = this._markers.length;
      const mapIsInitializedOrUpdated = !activeCoords || markersCount === 0;

      for (let i = 0; i < markersCount; i++) {
        const marker = this._markers.pop();
        marker.remove();
      }

      const allCoords = [...coords, activeCoords];
      allCoords.filter((it, index, self) => it && self.indexOf(it) === index)
        .forEach((it) => this._addMarker(Leaflet.marker(it, {
          icon: it === activeCoords ? activeIcon : icon
        }), map));

      if (mapIsInitializedOrUpdated) {
        this._map.fitBounds([...coords, activeCoords])
        .setZoom(ZOOM);
      }
    }

    componentDidMount() {
      const {coords, activeCoords} = this.props;
      const mapElement = this._mapRef.current;
      const map = this._map = Leaflet.map(mapElement);
      Leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

      this._updateMarkers(coords, activeCoords);
    }

    componentDidUpdate() {
      const {coords, activeCoords} = this.props;
      this._updateMarkers(coords, activeCoords);
    }

    render() {
      return (
        <Component
          {...this.props}
          forwardRef={this._mapRef}
        />);
    }
  }

  WithMap.propTypes = {
    activeCoords: PropTypes.arrayOf(PropTypes.number),
    coords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    className: PropTypes.string.isRequired
  };

  return WithMap;
};

export default withMap;
