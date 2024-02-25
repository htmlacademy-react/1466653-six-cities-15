import { FC } from 'react';
import { TAppProps } from '../../app';
import { OffersSortingForm } from '../../components/offers-sorting-form';
import { OfferCard } from '../offer-card';

type TOffersSectionProps = Pick<TAppProps, 'offers'>;

export const OffersSection: FC<TOffersSectionProps> = ({ offers }) => (
  <div className="cities__places-container container" >
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <OffersSortingForm />
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => <OfferCard key={offer.id} offer={offer} />)
        }
      </div>
    </section>

    <div className="cities__right-section">
      <section className="cities__map map" />
    </div>
  </div>
);
