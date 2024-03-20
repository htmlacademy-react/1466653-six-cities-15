import { FC, useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { IFullOffer, TCity } from '../../types/offer';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

const Marker = {
  URL_DEFAULT: './public/img/pin.svg',
  URL_CURRENT: './public/img/pin-active.svg',
  ICON_WIDTH: 27,
  ICON_HEIGHT: 39,
  ICON_ANCHOR_X: 14,
  ICON_ANCHOR_Y: 20,
};

type TMapProps = {
  offers: IFullOffer[];
  city: TCity;
  selectedOffer?: IFullOffer;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: Marker.URL_DEFAULT,
  iconSize: [Marker.ICON_WIDTH, Marker.ICON_HEIGHT],
  iconAnchor: [Marker.ICON_ANCHOR_X, Marker.ICON_ANCHOR_Y]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: Marker.URL_CURRENT,
  iconSize: [Marker.ICON_WIDTH, Marker.ICON_HEIGHT],
  iconAnchor: [Marker.ICON_ANCHOR_X, Marker.ICON_ANCHOR_Y]
});

export const Map: FC<TMapProps> = ({ offers, selectedOffer, city }) => {
  const mapRef = useRef<HTMLElement | null>(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: offer.id === selectedOffer?.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className="cities__map map"
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    />
  );
};
