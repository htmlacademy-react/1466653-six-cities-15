import { FC, useState } from 'react';
import { Nullable } from 'vitest';
import { IBaseOffer, TCity } from '../../types/offer';
import { OffersSortingForm } from '../../components/offers-sorting-form';
import { OffersList } from '../offers-list';
import { Map} from '../map';

type TOffersSectionProps = {
  offers: IBaseOffer[];
  city: TCity;
};

export const OffersSection: FC<TOffersSectionProps> = ({ offers, city }) => {
  const [activeOffer, setActiveOffer] = useState<Nullable<IBaseOffer>>(null);

  const cardHoverHandler = (offer?: IBaseOffer) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className="cities__places-container container" >
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        {
          city && (<b className="places__found">{offers.length} places to stay in {city.name}</b>)
        }
        <OffersSortingForm />
        <OffersList offers={offers} cardHoverHandler={cardHoverHandler} />
      </section>

      <div className="cities__right-section">
        <Map
          offers={ offers }
          selectedOffer={ activeOffer }
          city={city}
          mapClassName={'cities'}
        />
      </div>
    </div>
  );
};
