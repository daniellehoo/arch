import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const styles = {
  width: '50vw',
  height: '100%',
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({setMap, mapContainer}) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/daniellehoo/ckdaoqibh1ds31il29rzxo07l', // stylesheet location
        center: [-73.983787, 40.710104],
        zoom: 8,
      });

      map.on('load', () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({setMap, mapContainer});
  }, [map]);

  return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;
