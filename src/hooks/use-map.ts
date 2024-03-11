import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { TCity } from '../types/offer';
import { Nullable } from 'vitest';

const DefaultCityLocation = {
  LATITUDE: 52.37048478591418,
  LONGITUDE: 4.883349914932722,
  ZOOM: 1,
};

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: Nullable<TCity>
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city?.location.latitude || DefaultCityLocation.LATITUDE,
          lng: city?.location.longitude || DefaultCityLocation.LONGITUDE
        },
        zoom: city?.location.zoom || DefaultCityLocation.ZOOM
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
