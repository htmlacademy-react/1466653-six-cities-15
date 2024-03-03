import { FC, useState } from 'react';
import { TAppProps } from '../../app';
import { OfferCard } from '../offer-card';
import { Nullable } from 'vitest';
import { IFullOffer } from '../../types/offer';

type TOffersListProps = Pick<TAppProps, 'offers'>;

export const OffersList: FC<TOffersListProps> = ({ offers }) => {
  const [activeOffer, setActiveOffer] = useState<Nullable<IFullOffer>>(null);
  const cardHoverHandler = (offer?: IFullOffer) => {
    setActiveOffer(offer || null);
  };
  console.log(activeOffer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            cardHoverHandler={cardHoverHandler}
          />)
        )
      }
    </div>
  );
};
