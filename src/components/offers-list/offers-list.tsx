import { FC } from 'react';
import { TAppProps } from '../../app';
import { OfferCard } from '../offer-card';

type TOffersListProps = Pick<TAppProps, 'offers'> & {
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
