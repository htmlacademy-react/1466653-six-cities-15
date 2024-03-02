import { FC } from 'react';
import { IBaseOffer } from '../../types/offer';
import { FavoriteOffersList } from '../favorite-offers-list';
import { Link } from 'react-router-dom';

export type TFavoriteLocation = {
  locationName: string;
  locationLink: string;
  offers: IBaseOffer[];
}

type TFavoriteLocationOffersProps = {
  location: TFavoriteLocation;
};

export const FavoriteLocationOffers: FC<TFavoriteLocationOffersProps> = ({ location }) => {
  if(!location.offers.length) {
    return '';
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={location.locationLink}>
            <span>{location.locationName}</span>
          </Link>
        </div>
      </div>

      <FavoriteOffersList favorites={location.offers} />
    </li>
  );
};
