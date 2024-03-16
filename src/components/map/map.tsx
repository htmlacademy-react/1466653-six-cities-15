import { FC, useRef, useEffect } from 'react';
import { Nullable } from 'vitest';
import { Map, Icon, Marker, layerGroup } from 'leaflet';
import { IBaseOffer, IFullOffer, TCity } from '../../types/offer';
import useMap from '../../hooks/use-map';

const MarkerUrl = {
  DEFAULT: './public/img/pin.svg',
  CURRENT: './public/img/pin-active.svg',
};

type TMapProps = {
  offers: IFullOffer[];
  city: TCity;
  selectedOffer: Nullable<IBaseOffer>;
};

const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 20]
});

const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 20]
});

export const MapComponent: FC<TMapProps> = ({ offers, selectedOffer, city }) => {
// export const MapComponent: FC<TMapProps> = () => {
  const mapRef = useRef<HTMLElement | null>(null);
  // useMap(mapRef, city);

  const map: Map | null = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      style={{height: '100%'}}
      ref={mapRef}
    />
  );
};
