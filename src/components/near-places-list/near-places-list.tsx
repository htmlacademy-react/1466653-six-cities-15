import { FC } from 'react';
import { IBaseOffer } from '../../types/offer';
import { OfferCard } from '../offer-card';

type TOffersListProps = {
  offers: IBaseOffer[];
};

export const NearPlacesList: FC<TOffersListProps> = ({offers}) => (
  <div className="near-places__list places__list">
    {
      offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardClassName={'nearPlaces'}
          hoverHandler={() => {}}
        />)
      )
    }
  </div>
);
