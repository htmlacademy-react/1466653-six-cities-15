import { FC, useState } from 'react';
import { Nullable } from 'vitest';
import { TAppProps } from '../../app';
import { IFullOffer, TCity } from '../../types/offer';
import { OffersSortingForm } from '../../components/offers-sorting-form';
import { OffersList } from '../offers-list';
import { Map } from '../map';

type TOffersSectionProps = Pick<TAppProps, 'offers'> & {
  city: Nullable<TCity>;
};

export const OffersSection: FC<TOffersSectionProps> = ({ offers, city }) => {
  const [activeOffer, setActiveOffer] = useState<Nullable<IFullOffer>>(null);

  const cardHoverHandler = (offer?: IFullOffer) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className="cities__places-container container" >
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        {
          city && (<b className="places__found">312 places to stay in {city?.name}</b>)
        }
        <OffersSortingForm />
        <OffersList offers={offers} cardHoverHandler={cardHoverHandler} />
      </section>

      <div className="cities__right-section">
        <Map offers={ offers } selectedOffer={ activeOffer } />
      </div>
    </div>
  );
};
