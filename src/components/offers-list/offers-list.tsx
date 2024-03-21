import { FC } from 'react';
import { OfferCard } from '../offer-card';
import { IFullOffer } from '../../types/offer';

type TOffersListProps = {
  offers: IFullOffer[];
  cardHoverHandler: () => void;
}

export const OffersList: FC<TOffersListProps> = ({ offers, cardHoverHandler }) => (
  <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          hoverHandler={cardHoverHandler}
        />)
      )
    }
  </div>
);
