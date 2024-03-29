import { FC } from 'react';
import { LOCATIONS } from '../../mock-data/mock';
import { FavoriteLocationOffers } from '../favorite-location-offers';
import { TFavoriteLocation } from '../favorite-location-offers/favorite-location-offers';
import { IBaseOffer } from '../../types/offer';

type TFavoriteLocationsListProps = {
  favorites: IBaseOffer[];
};

export const FavoriteLocationsList: FC<TFavoriteLocationsListProps> = ({ favorites }) => {
  const sortedFavoritesList: TFavoriteLocation[] = LOCATIONS.map((location) => ({
    locationName: location.title,
    locationLink: location.src,
    offers: favorites.filter((item) => (item.city.name === location.title)),
  }));

  return (
    <ul className="favorites__list">
      {
        sortedFavoritesList.map((location) => <FavoriteLocationOffers location={location} key={location.locationName} />)
      }
    </ul>
  );
};
