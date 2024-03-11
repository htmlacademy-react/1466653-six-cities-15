import { FC, useRef } from 'react';
import { Nullable } from 'vitest';
import { TAppProps } from '../../app';
import { TCity, IBaseOffer } from '../../types/offer';

type TMapProps = Pick<TAppProps, 'offers'> & {
  city: Nullable<TCity>;
  selectedOffer: Nullable<IBaseOffer>;
};

/*
const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
*/

// export const Map: FC<TMapProps> = ({ city, offers, selectedOffer }) => {
export const Map: FC<TMapProps> = () => {
  const mapRef = useRef(null);

  return (
    <section
      className="cities__map map"
      // style={{height: '512px'}}
      ref={mapRef}
    />
  );
};
